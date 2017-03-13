package org.syaku.spring.apps.board.service;

import org.springframework.data.domain.Page;
import org.syaku.spring.apps.board.domain.Board;

import java.util.List;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
public interface BoardService {
	Page<Board> getBoardList(int page, int limit);
	Board getBoardObject(String boardIdx);
	void saveBoard(Board board);
}
