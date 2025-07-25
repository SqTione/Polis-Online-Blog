<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Article;

interface IArticleRepository {
	public function create(array $data);
}

class ArticleRepository implements IArticleRepository 
{
	/**
	 * Returns all articles
	 * @return \Illuminate\Database\Eloquent\Collection<int, Article>
	 */
	public function findAll()
	{
		return Article::all();
	}

	/**
	 * Returns all articles with pagination
	 * @param int $perPage Count of articles per page (Default = 10)
	 * @return \Illuminate\Pagination\LengthAwarePaginator
	 */
	public function paginate(int $perPage = 10)
	{
		return Article::paginate($perPage);
	}

	public function create(array $data) 
	{
		return Article::create($data);
	}
}