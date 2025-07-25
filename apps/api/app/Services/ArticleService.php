<?php

declare(strict_types= 1);

namespace App\Services;

use App\Article;
use App\DTOs\ArticleDTO;
use App\Repositories\ArticleRepository;
use Illuminate\Database\Eloquent\Collection;

class ArticleService 
{
	public function __construct(
		private readonly ArticleRepository $articleRepository
	) {}

	/**
	 * Gets all articles
	 * @return Collection<int, Article>
	 */
	public function index() 
	{
		$articles = $this->articleRepository->findAll();

		return $articles;
	}

	/**
	 * Gets paginated articles
	 * @param int $perPage Count of articles per page (Default = 10)
	 */
	public function paginate(int $perPage = 10): Array {
		$articles = $this->articleRepository->paginate($perPage);

		return [
			'articles' => $articles->items(),
			'meta' => [
				'total' => $articles->total(),
				'current_page' => $articles->currentPage(),
				'last_page' => $articles->lastPage()
			],
			'links' => [
				'next' => $articles->nextPageUrl(),
				'prev' => $articles->previousPageUrl()
			]
		];
	}

	/**
	 * Gets article by ID
	 * @param int $id Article ID
	 * @return Article Found Article
	 */
	public function getById(int $id) {
		$article = $this->articleRepository->findById($id);

		return $article;
	}

	/**
	 * Creates new article
	 * @param ArticleDTO $articleDTO Article DTO
	 * @return Article Created Article
	 */
	public function create(ArticleDTO $articleDTO) 
	{
		$article = $this->articleRepository->create([
			"title" => $articleDTO->title,
			'content' => $articleDTO->content
		]);

		return $article;
	}
}