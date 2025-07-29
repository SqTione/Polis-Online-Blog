<?php

namespace App;

use App\Comment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    use HasFactory;

    protected $table = "article";

    protected $fillable = [
        'title',
        'content'
    ];

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
