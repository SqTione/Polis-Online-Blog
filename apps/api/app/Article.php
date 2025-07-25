<?php

namespace App;

use Dom\Comment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    protected $table = "article";    

    protected $fillable = [
        'title',
        'content'
    ]; 

    public function article(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
