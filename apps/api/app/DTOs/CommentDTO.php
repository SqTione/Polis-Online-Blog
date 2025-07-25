<?php

namespace App\DTOs;

class CommentDTO
{
	public function __construct(
		public readonly string $authorName,
		public readonly string $content,
		public readonly int $articleId
	) {}

	public static function fromArray(array $data): self
	{
		return new self(
			authorName: $data["author_name"],
			content: $data["content"],
			articleId: $data["article_id"]
		);
	}
}
