package org.syaku.spring.apps.board.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.syaku.spring.apps.board.dao.BoardDAO;
import org.syaku.spring.apps.board.domain.Board;

import javax.annotation.Resource;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Service
public class BoardServiceImpl implements BoardService {
	@Resource(name = "boardDAO") private BoardDAO boardDAO;

	@Override
	@Transactional(readOnly = true)
	public Board getBoardObject(String boardIdx) {
		return boardDAO.getOne(boardIdx);
	}

	@Override
	public void saveBoard(Board board) {
		boardDAO.save(board);
	}

}
