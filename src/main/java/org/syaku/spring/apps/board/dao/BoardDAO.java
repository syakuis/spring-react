package org.syaku.spring.apps.board.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.syaku.spring.apps.board.domain.Board;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Repository
public interface BoardDAO extends JpaRepository<Board, String>{
}
