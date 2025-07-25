<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Comment;

interface ICommentRepository
{
	public function findById(int $id): Comment;
	public function findAllByArticleId(int $articleId): array;
	public function findLatestByArticleId(int $articleId): ?Comment;
	public function create(array $data, int $articleId): Comment;
}

class CommentRepository implements ICommentRepository
{
	/**
	 * Finds comment by ID
	 * @param int $id Comment ID
	 * @return Comment
	 */
	public function findById(int $id): Comment
	{
		return Comment::findOrFail($id);
	}

	/**
	 * Finds all comments by article ID
	 * @param int $articleId article ID
	 * @return array Comments for article
	 */
	public function findAllByArticleId(int $articleId): array
	{
		return Comment::where('article_id', $articleId)
			->orderByDesc('created_at')
			->get()
			->all();
	}

	/**
	 * Finds latest comment for article
	 * @return Comment|null
	 */
	public function findLatestByArticleId(int $articleId): ?Comment
	{
		return Comment::where('article_id', $articleId)
			->latest()
			->first();
	}

	/**
	 * Creates new comment
	 * @param array $data
	 * @return Comment
	 */
	public function create(array $data, int $articleId): Comment
	{
		return Comment::create([
			'author_name' => $data['author_name'],
			'content' => $data['content'],
			'article_id' => $articleId
		]);
	}
}
