<?php

namespace App\Http\Controllers;

use App\Mail\Message;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('ManageStudents', [
            'studentsDB' => Student::with('user')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Register');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dump($request->all());
        // exit;
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'firstName' => 'required|string|max:60',
            'secondName' => 'required|string|max:60',
            'phone' => 'required|string',
            'birthday' => 'required|date',
            'gender' => ['required', Rule::in(['male', 'female'])],
            'country' => 'required|string',
            'firstLanguage' => 'required|string',
            'secondLanguage' => 'required|string',
            'level' => ['required', Rule::in(['beginner', 'moderate', 'advanced'])],
        ]);
        $student = Student::create($validated);
        User::create([
            'name' => $validated['firstName'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'student_id' => $student->id,
            'active' => false,
        ]);
        return back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function activate(User $user)
    {
        $user->active = true;
        $user->save();
        Mail::to($user->email)->send(new Message(
            "HI $user->name , congratulations your account is activated now you can go and <a href='http://learning-piano-online.net/login'>login</a>"
        ));
        return Redirect::route('student.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function activateUsers(Request $request)
    {
        $usersId = $request->users;
        $users = User::select(['id', 'email'])->whereIn('id', $usersId)->get();
        $emails = $users->map(function ($user){
            return $user->email;
        });
        User::whereIn('id', $usersId)->update(['active' => true]);
        Mail::to($emails->toArray())->send(new Message(
            "Congratulations your account is activated now you can go and <a href='http://learning-piano-online.net/login'>login</a>"
        ));
        return Redirect::route('student.index');
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function deactivate(User $user)
    {
        $user->active = false;
        $user->save();
        Mail::to($user->email)->send(new Message(
            "Unfortunately your account is deactivated you can contact with the admin for more details"
        ));
        return Redirect::route('student.index');
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function deactivateUsers(Request $request)
    {
        $usersId = $request->users;
        // dump($request->all());
        // exit;
        $users = User::select(['id', 'email'])->whereIn('id', $usersId)->get();
        $emails = $users->map(function ($user){
            return $user->email;
        });
        User::whereIn('id', $usersId)->update(['active' => false]);
        Mail::to($emails->toArray())->send(new Message(
            "Unfortunately your account is deactivated you can contact with the admin for more details"
        ));
        return Redirect::route('student.index');
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
