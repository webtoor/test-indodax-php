<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
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
                'username' => $validateData['username'],
                'email' => $validateData['email'],
                'password' => Hash::make($validateData['password']),
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
        $validatedData = $request->validate([
            'username' => 'required|string',
            'password' => 'required'
        ]);
        $resultUser = User::where('username', $validatedData['username'])->first();
        if($resultUser) {  
            if (Hash::check($validatedData['password'], $resultUser->password)) {
                $request->request->add([
                    "grant_type" => "password",
                    "client_id" => "3",
                    "client_secret" => "tyr3PagBXjolRIahvZagAfPm6mREGfqjQKf0EEfV",
                    "username"  => $resultUser->email,
                    "password"  => $validatedData['password'],
                    "scope"     => "*"
                ]);
                $proxy = $request->create('/oauth/token', 'POST');
                $response = Route::dispatch($proxy);

                $json = (array) json_decode($response->getContent());
                $json['user_id'] = $resultUser->user_id;
                $json['email'] = $resultUser->email;
                $json['username'] = $resultUser->username;
                return $response->setContent(json_encode($json));
            }
        }
    }
}
