package org.syaku.spring.apps.board.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.syaku.spring.apps.board.domain.Board;
import org.syaku.spring.apps.board.service.BoardService;

import javax.annotation.Resource;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 7.
 */
@Controller
@RequestMapping("/api/board")
public class BoardController {

	@Resource(name = "boardServiceImpl") private BoardService boardService;

	@RequestMapping(value = "/{boardIdx}", method = RequestMethod.GET)
	public @ResponseBody Board getBoardObject(@PathVariable("boardIdx") String boardIdx) {
		return boardService.getBoardObject(boardIdx);
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody Board procBoardSave(@RequestBody Board board) {
		boardService.saveBoard(board);
		return board;
	}
}
