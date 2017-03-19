package org.syaku.spring.apps.board.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.syaku.spring.apps.board.domain.Board;
import org.syaku.spring.apps.board.service.BoardService;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 7.
 */
@Controller
@RequestMapping(value = "/api/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

	@Resource(name = "boardServiceImpl") private BoardService boardService;

	@GetMapping("")
	public @ResponseBody Page<Board> getBoardList(
			@RequestParam(name = "page", defaultValue = "1") int page,
			@RequestParam(name = "limit", defaultValue = "10") int limit
			) {
		return boardService.getBoardList(page, limit);
	}

	@GetMapping("/{boardIdx}")
	public @ResponseBody Board getBoardObject(@PathVariable("boardIdx") String boardIdx) {
		logger.debug(boardIdx);
		return boardService.getBoardObject(boardIdx);
	}

	@PostMapping("")
	public @ResponseBody Board procBoardSave(@RequestBody Board board) {
		boardService.saveBoard(board);
		return board;
	}

	@DeleteMapping("/{boardIdx}")
	public @ResponseBody ResponseEntity<Void> procBoardDelete(@PathVariable("boardIdx") String boardIdx) {
		boardService.deleteBoard(boardIdx);
		return new ResponseEntity(HttpStatus.OK);
	}
}
