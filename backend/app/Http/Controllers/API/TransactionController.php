<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function findHistory(){
        try {
            $accessToken = Auth::user()->token();
            $transaction = Transaction::with("sender", "receiver")->where("sender", $accessToken->user_id)->orWhere("receiver", $accessToken->user_id)->orderBy("transaction_id", "desc")->get();
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
        $validateData = $this->validate($request,[
            'receiver' => 'required',
            'amount' => 'required|numeric',
        ]);
        try {
            $accessToken = Auth::user()->token();
            $sender = User::where("user_id", $accessToken->user_id)->first();
            $receiver = User::where("username", $validateData["receiver"])->first();
            if($sender->saldo >= $validateData["amount"]){
                $transaction = Transaction::create([
                    "sender" => $accessToken->user_id,
                    "receiver" => $receiver->user_id,
                    "amount" => $validateData["amount"]
                ]);
                
                // Saldo Sender
                $saldo_sender = $sender->saldo - $validateData["amount"];
                $senderSaldo = User::where("user_id", $accessToken->user_id)->update([
                    "saldo" => $saldo_sender
                ]);

                // Saldo Receiver
                $saldo_receiver = $sender->saldo + $validateData["amount"];
                $receiverSaldo = User::where("user_id", $receiver->user_id,)->update([
                    "saldo" => $saldo_receiver
                ]);

                return response()->json([
                    'status' => 200,
                    'data' => $transaction
                ]);
            }else{
                return response()->json([
                    'status' => 422,
                    'message' => 'Saldo Anda tidak cukup',
                    'error' => 'Saldo Anda tidak cukup'
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 404,
                'error' => $e->getMessage()
            ]);
        }
    }
}
