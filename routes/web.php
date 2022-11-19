<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AssetsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\StudentController;
use App\Mail\Feedback;
use App\Models\Assets;
use App\Models\Exam;
use App\Models\Student;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth','admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('articles', ArticleController::class)->except(['index', 'show']);
    Route::resource('books', BookController::class)->except('index');
    Route::resource('meetings', MeetingController::class)->except(['index', 'show']);
});


// public routing
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/images_show', function () {
    return Inertia::render('Images');
});


Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');
Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::get('/meetings', [MeetingController::class, 'index'])->name('meetings.index');
Route::get('/meetings/{meeting}', [MeetingController::class, 'show'])->name('meetings.show');

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/feedback', function () {
    return Inertia::render('Feedback');
});

Route::post('/feedback',function (Request $request){
    $request->validate([
        'feedback'=>'required|string'
    ]);
    Mail::to('amaha6090@gmail.com')->send(new Feedback($request->feedback));
    return Redirect::back();
});

Route::prefix('/quiz')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Quiz');
    });
    Route::get('/pre-exam', function () {
        // return Inertia::render('QuizSamples/Exam', ['examType' => 'pre']);
        return redirect()->back();
    });
    Route::get('/post-exam', function () {
        // return Inertia::render('QuizSamples/Exam', ['examType' => 'post']);
        return redirect()->back();
    });
    Route::post('/check-exam', [ExamController::class, 'checking']);
});

Route::get('/display-scores', function () {
    return Inertia::render('DisplayScores', [
        'scores' => Exam::orderByDesc('id')->get(),
    ]);
});

Route::get('/about-program', function () {
    return Inertia::render('AboutProgram');
});

Route::get('/register', [StudentController::class, 'create']);
Route::post('/register', [StudentController::class, 'store']);
Route::get('/activate-user/{user}', [StudentController::class, 'activate']);
Route::get('/deactivate-user/{user}', [StudentController::class, 'deactivate']);
Route::post('/activate-users', [StudentController::class, 'activateUsers']);
Route::post('/deactivate-users', [StudentController::class, 'deactivateUsers']);
Route::get('/list-students', [StudentController::class, 'index'])->name('student.index');
Route::get('/assets/index',[AssetsController::class,'index']);
Route::get('/assets/get/{name}',[AssetsController::class,'getAssets']);
Route::post('/assets/insert',[AssetsController::class,'insert']);
Route::post('/assets/remove',[AssetsController::class,'remove']);
// login
Route::any('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/login', [AuthController::class, 'authenticate']);
Route::get('/logout', [AuthController::class, 'logout']);

Route::get('/forgot-password', function () {
    return Inertia::render('ForgetPassword');
})->middleware('guest')->name('password.request');

Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    return $status === Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status)])
                : back()->withErrors(['email' => __($status)]);
})->middleware('guest')->name('password.email');

Route::get('/reset-password/{token}', function ($token) {
    return Inertia::render('ResetPassword',[
        'token' => $token
    ]);
})->middleware('guest')->name('password.reset');
Route::post('/reset-password', function (Request $request) {
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|min:8|confirmed',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user, $password) {
            $user->forceFill([
                'password' => Hash::make($password)
            ])->setRememberToken(Str::random(60));

            $user->save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
                ? redirect()->route('login')->with('status', __($status))
                : back()->withErrors(['email' => [__($status)]]);
})->middleware('guest')->name('password.update');
