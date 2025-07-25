<?php

namespace App\DTOs;

use App\Comment;

class CommentDTO
{
	public function __construct(
		public readonly string $authorName,
		public readonly string $content,
	) {}

	public static function fromArray(array $data): self
	{
		return new self(
			authorName: $data["author_name"],
			content: $data["content"],
		);
	}
}
