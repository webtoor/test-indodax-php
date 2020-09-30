<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{   
    protected $table = 'transaction';
    protected $fillable = [
        'sender', 'receiver', 'amount'
    ];
    public $timestamps = true;

}
