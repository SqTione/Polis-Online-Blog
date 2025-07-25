<?php

declare(strict_types=1);

namespace App\Services;

use App\DTOs\CommentDTO;
use App\Repositories\CommentRepository;
use App\Comment;

class CommentService
{
	public function __construct(
		private readonly CommentRepository $commentRepository
	) {}

	/**
	 * Finds all comments by article ID
	 * @param int $articleId Article ID
	 * @return array Article comments
	 */
	public function getByArticleId(int $articleId): array
	{
		return $this->commentRepository->findAllByArticleId($articleId);
	}

	/**
	 * Gets latest comment by ArticleID
	 * @param int $articleId Article ID
	 * @return Comment|null Found comment
	 */
	public function getLatestByArticleId(int $articleId): Comment
	{
		return $this->commentRepository->findLatestByArticleId($articleId);
	}

	public function getArticleComments(int $articleId): array
	{
		return $this->commentRepository->findAllByArticleId($articleId);
	}

	/**
	 * Creates new comment
	 * @param CommentDTO $commentDTO Comment DTO
	 * @return Comment Created Comment
	 */
	public function create(CommentDTO $commentDTO, int $articleId): Comment
	{
		$comment = $this->commentRepository->create([
			"author_name" => $commentDTO->authorName,
			"content" => $commentDTO->content,
		], $articleId);

		return $comment;
	}
}
