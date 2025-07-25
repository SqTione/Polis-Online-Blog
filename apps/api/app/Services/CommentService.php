<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\CommentRepository;

class CommentService
{
	public function __construct(
		private readonly CommentRepository $commentRepository
	) {}
}
