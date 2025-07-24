<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Article;

interface IArticleRepository {
	public function create(array $data);
}

class ArticleRepository implements IArticleRepository 
{
	public function create(array $data) {
		return Article::create($data);
	}
}