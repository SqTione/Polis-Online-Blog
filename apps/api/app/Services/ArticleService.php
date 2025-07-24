<?php

declare(strict_types= 1);

namespace App\Services;

use App\Article;
use App\DTOs\ArticleDTO;
use App\Repositories\ArticleRepository;

class ArticleService 
{
	public function __construct(
		private readonly ArticleRepository $articleRepository
	) {}


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