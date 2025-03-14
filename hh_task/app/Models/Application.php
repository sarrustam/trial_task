<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'applications';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'phone',
    ];
    use HasFactory;
    
}
