<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Article;

interface IArticleRepository
{
	public function findAll();
	public function findById(int $id): Article;
	public function paginate(int $perPage = 10);
	public function create(array $data): Article;
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

	/**
	 * Finds article by ID
	 * @param int $id Article ID
	 * @return Article
	 */
	public function findById(int $id): Article
	{
		return Article::findOrFail($id);
	}

	/**
	 * Creates new article
	 * @param array $data Article Data
	 * @return Article
	 */
	public function create(array $data): Article
	{
		return Article::create($data);
	}
}
