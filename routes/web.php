<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AssetsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\StudentController;
use App\Mail\Feedback;
use App\Models\Exam;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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
// admin area
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('articles', ArticleController::class)->except(['index', 'show']);
    Route::resource('books', BookController::class)->except('index');
    Route::resource('meetings', MeetingController::class)->except(['index', 'show']);
    // activation of users
    Route::get('/activate-user/{user}', [StudentController::class, 'activate']);
    Route::get('/deactivate-user/{user}', [StudentController::class, 'deactivate']);
    Route::post('/activate-users', [StudentController::class, 'activateUsers']);
    Route::post('/deactivate-users', [StudentController::class, 'deactivateUsers']);
    Route::get('/list-students', [StudentController::class, 'index'])->name('student.index');
    // control assets
    Route::post('/assets/insert-videos', [AssetsController::class, 'insertVideosGroup']);
    Route::post('/assets/edit-videos', [AssetsController::class, 'editVideosGroup']);
    Route::post('/assets/remove-videos', [AssetsController::class, 'removeVideosGroup']);
    Route::post('/assets/insert-images', [AssetsController::class, 'insertImages']);
    Route::post('/assets/edit-images', [AssetsController::class, 'editImages']);
    Route::post('/assets/remove-image', [AssetsController::class, 'removeImage']);
    // Route::get('/display-scores', function () {
    //     return Inertia::render('DisplayScores', [
    //         'scores' => Exam::orderByDesc('id')->get(),
    //     ]);
    // });
});
// user area
Route::middleware(['auth','activated'])->group(function () {



    Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
    Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');
    Route::get('/books', [BookController::class, 'index'])->name('books.index');

    Route::get('/meetings/online', function () {
        return Inertia::render('Meetings/Online');
    });
    Route::get('/meetings/online-or-offline', function () {
        return Inertia::render('Meetings/OnlineAndOffline');
    });
    Route::get('/meetings/categories/{category}', [MeetingController::class, 'index'])->name('meetings.index');
    Route::get('/meetings/{meeting}', [MeetingController::class, 'show'])->name('meetings.show');



    Route::prefix('/quiz')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Quiz');
        });
        Route::get('/pre-exam', [ExamController::class,'goToExam']);

        Route::get('/post-exam', function () {
            return Inertia::render('QuizSamples/Exam', ['examType' => 'post']);
        });
        Route::post('/check-exam', [ExamController::class, 'checking']);
        Route::get('/check-exam',[ExamController::class,'goToExam']);
    });
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
Route::get('/about-program', function () {
    return Inertia::render('AboutProgram');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/feedback', function () {
    return Inertia::render('Feedback');
});

Route::post('/feedback', function (Request $request) {
    $request->validate([
        'feedback' => 'required|string'
    ]);
    Mail::to('amaha6090@gmail.com')->send(new Feedback($request->feedback));
    return Redirect::back();
});
// register - verification
Route::get('/register', [StudentController::class, 'create'])->middleware('guest');
Route::post('/register', [StudentController::class, 'store'])->middleware('guest');
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect()->route('home');
})->middleware(['auth', 'signed'])->name('verification.verify');
Route::get('/not-verified', function () {
    return Inertia::render('NotVerified');
})->middleware(['auth'])->name('reverfing');
Route::get('/pending-activation', function () {
    return Inertia::render('PendingActivation');
})->middleware(['auth'])->name('pending_activation');
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');
// assets
Route::get('/assets', function () {
    return Inertia::render('Assets/VideosAndImages');
});
Route::get('/assets/images', function () {
    return Inertia::render('Assets/Images');
});
Route::get('/assets/videos', function () {
    return Inertia::render('Assets/Videos');
});
Route::get('/assets/get/{name}', [AssetsController::class, 'index']);
// login
Route::any('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/login', [AuthController::class, 'authenticate'])->middleware('guest');
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth');
// forget-reset password
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
    return Inertia::render('ResetPassword', [
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
