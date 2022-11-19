<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password'], 'active' => 1])) {
            throw ValidationException::withMessages([
                'email' => [
                    'Wrong credentials , make sure that your email & password is correct or you may not activated yet'
                ]
            ]);
        }

        return Redirect::route('dashboard');
    }

    public function logout()
    {
        return Auth::logout();
    }
}
