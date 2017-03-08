package org.syaku.spring.apps.board.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Entity
@Table(name = "BOARD")
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Board {

	@Column(name = "board_idx")
	@Id
	@GeneratedValue(generator = "IdGenerator")
	@GenericGenerator(
		name = "IdGenerator",
		strategy = "org.syaku.spring.jpa.IdGenerator",
		parameters = {
				@org.hibernate.annotations.Parameter(name = "sequenceName", value = "BOARD_IDX_SEQ"),
				@org.hibernate.annotations.Parameter(name = "prefix", value = "B"),
				@org.hibernate.annotations.Parameter(name = "pad", value = "19")
		})
	private String boardIdx;
	private String subject;
	private String content;
	@Column(name = "readed_count")
	private Long readedCount;

	@Column(name = "reg_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date regDate;
}
