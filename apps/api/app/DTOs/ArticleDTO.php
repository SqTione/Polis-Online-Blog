<?php

namespace App\DTOs;

class ArticleDTO
{
	public function __construct(
		public readonly string $title,
		public readonly string $content
	) {}

	public static function fromArray(array $data): self {
		return new self(
			title: $data["title"],
			content: $data["content"],
		);
	}
}