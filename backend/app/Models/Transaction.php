<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{   
    protected $table = 'transactions';
    protected $fillable = [
        'sender', 'receiver', 'amount'
    ];
    public $timestamps = true;

    public function sender(){
        return $this->belongsTo('App\Models\User', 'sender', 'user_id');
    }

    public function receiver(){
        return $this->belongsTo('App\Models\User', 'receiver', 'user_id');
    }
}
