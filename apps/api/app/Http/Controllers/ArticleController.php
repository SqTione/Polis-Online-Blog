<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Services\ArticleService;

class ArticleController extends Controller
{
    public function __construct(
        public readonly ArticleService $articleService
    ) {}

    public function index()
    {
        // Getting paginated articles
        $articles = $this->articleService->paginate();

        // Returning paginated articles
        return response()->json($articles);
    }

    public function showLast(int $id)
    {
        // Getting article by id
        $article = $this->articleService->getById($id);

        // Returning result
        return $article;
    }

    public function store(ArticleRequest $request)
    {
        // Request validation
        $articleDTO = $request->toDTO();

        // Creating new Article
        $article = $this->articleService->create($articleDTO);

        // Returning response with created Article
        return response()->json(['article' => $article], 201);
    }
}
