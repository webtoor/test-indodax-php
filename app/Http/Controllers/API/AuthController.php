<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function signUp(Request $request){

        $validateData = $this->validate($request,[
            'username' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:5|confirmed',
        ]);

        try {
            $user = User::create([
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'saldo' => 0
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'register success'
            ]);

        } catch (\Exception $e) {

            return response()->json([
                'status' => 404,
                'error' => $e->getMessage()
            ]);
        }
    }

    public function signIn(Request $request){
        return "hehehe";
    }
}
