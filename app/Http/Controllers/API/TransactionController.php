<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function findHistory(){
        try {
            $accessToken = Auth::user()->token();
            $transaction = Transaction::where("sender", $accessToken->user_id)->orderBy("transaction_id", "desc")->get();
            return response()->json([
                'status' => 200,
                'data' => $transaction
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 404,
                'error' => $e->getMessage()
            ]);
        }
    }

    public function create(Request $request){
        
        try {
            $accessToken = Auth::user()->token();
            $transaction = Transaction::where("sender", $accessToken->user_id)->orderBy("transaction_id", "desc")->get();
            return response()->json([
                'status' => 200,
                'data' => $transaction
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 404,
                'error' => $e->getMessage()
            ]);
        }
    }
}
