<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function find(){
        try {
            $accessToken = Auth::user()->token();
            $user = User::where('user_id', $accessToken->user_id)->first();
            return response()->json([
                'status' => 200,
                'data' => $user
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 404,
                'error' => $e->getMessage()
            ]);
        }
    }
}
