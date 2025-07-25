<?php

namespace App\Http\Controllers;

use App\CommentModel;
use App\Http\Requests\CommentRequest;
use App\Services\CommentService;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function __construct(
        private readonly CommentService $commentService
    ) {}
    /**
     * Gets all comments of Article
     */
    public function index(int $articleId)
    {
        // Getting comments data
        return $this->commentService->getByArticleId($articleId);
    }

    /**
     * Gets latest comment of the Article
     */
    public function showLast(int $articleId)
    {
        return $this->commentService->getLatestByArticleId($articleId);
    }

    /**
     * Creates new Comment
     */
    public function store(CommentRequest $request, int $articleId)
    {
        // Request validation
        $commentDTO = $request->toDTO();

        // Creating new Comment
        $comment = $this->commentService->create($commentDTO, $articleId);

        // Returning response with created Comment
        return response()->json([$comment], 201);
    }
}
