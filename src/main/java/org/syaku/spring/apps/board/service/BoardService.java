package org.syaku.spring.apps.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.syaku.spring.apps.board.dao.BoardDAO;
import org.syaku.spring.apps.board.domain.Board;
import org.syaku.spring.apps.board.service.enums.SortField;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Service
@Transactional
public class BoardService {
	@Autowired
	private BoardDAO boardDAO;

	@Transactional(readOnly = true)
	public Page<Board> getBoardList(int page, int limit) {
		return boardDAO.findAll(new PageRequest(page, limit, Sort.Direction.DESC, SortField.boardIdx.name()));
	}

	@Transactional(readOnly = true)
	public Board getBoardObject(String boardIdx) {
		return boardDAO.findOne(boardIdx);
	}

	public void saveBoard(Board board) {
		board.setRegDate(new Date());
		boardDAO.save(board);
	}

	public void deleteBoard(String boardIdx) {
		boardDAO.delete(boardIdx);
	}
}
