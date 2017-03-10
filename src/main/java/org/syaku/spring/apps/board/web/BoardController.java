package org.syaku.spring.apps.board.web;

import org.springframework.data.domain.Page;
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

	@Resource(name = "boardServiceImpl") private BoardService boardService;

	@GetMapping("")
	public @ResponseBody Page<Board> getBoardList(
			@RequestParam(name = "startPage", defaultValue = "1") int statePage,
			@RequestParam(name = "endPage", defaultValue = "10") int endPage
			) {
		return boardService.getBoardList(statePage, endPage);
	}

	@GetMapping("/{boardIdx}")
	public @ResponseBody Board getBoardObject(@PathVariable("boardIdx") String boardIdx) {
		return boardService.getBoardObject(boardIdx);
	}

	@PostMapping("")
	public @ResponseBody Board procBoardSave(@RequestBody Board board) {
		boardService.saveBoard(board);
		return board;
	}
}
