<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'API is working']);
});

// Article routes
Route::group(['prefix' => 'articles'], function () {
    Route::get('/', [ArticleController::class, 'index']);
    Route::get('/{id}', [ArticleController::class, 'show']);
    Route::post('/', [ArticleController::class, 'store']);

    Route::group(['prefix' => '{articleId}/comments'], function () {
        Route::get('/', [CommentController::class, 'index']);
        Route::get('/last', [CommentController::class, 'showLast']);
        Route::post('/', [CommentController::class, 'store']);
    });
});
