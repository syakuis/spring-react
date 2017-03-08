package org.syaku.spring.apps.board.service;

import org.syaku.spring.apps.board.domain.Board;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
public interface BoardService {
	Board getBoardObject(String boardIdx);
	void saveBoard(Board board);
}
