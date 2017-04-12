package org.syaku.spring.support.jpa;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.HibernateException;
import org.hibernate.MappingException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.Configurable;
import org.hibernate.id.IdentifierGenerator;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 16. 5. 27.
 */
public class IdGenerator implements IdentifierGenerator, Configurable {

	private static final Logger logger = LoggerFactory.getLogger(IdGenerator.class);

	private String ORACLE = "oracle";
	private String TIBERO = "tibero";
	private String H2 = "h2";
	private String MYSQL = "mysql";
	private String MARIADB = "mariadb";

	private String sequenceName;
	private String prefix;
	private String pad;

	public String getSequenceName() {
		return sequenceName;
	}

	public void setSequenceName(String sequenceName) {
		this.sequenceName = sequenceName;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getPad() {
		return pad;
	}

	public void setPad(String pad) {
		this.pad = pad;
	}

	@Override
	public void configure(Type type, Properties params, ServiceRegistry serviceRegistry) throws MappingException {
		setSequenceName(params.getProperty("sequenceName"));
		setPrefix(params.getProperty("prefix"));
		setPad(params.getProperty("pad", "0"));
	}

	@Override
	public Serializable generate(SessionImplementor session, Object object) throws HibernateException {
		Connection connection = session.connection();

		try {
			String url = StringUtils.lowerCase(connection.getMetaData().getURL());

			String query = null;

			if (StringUtils.indexOf(url, H2) > -1) {
				query = "SELECT nextval('" + sequenceName + "') AS nextval";
			} else if (StringUtils.indexOf(url, TIBERO) > -1 || StringUtils.indexOf(url, ORACLE) > -1) {
				query = "SELECT " + sequenceName + ".NEXTVAL AS nextval FROM dual";
			} else {
				throw new HibernateException("not");
			}

			PreparedStatement ps = connection.prepareStatement(query);
			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				Long id = rs.getLong("nextval");
				int pad = Integer.parseInt(this.pad);

				if (pad > 0) {
					return prefix + StringUtils.leftPad("" + id, pad, '0');
				} else {
					return id;
				}
			}

		} catch (SQLException e) {
			logger.error(e.getMessage(), e);
		}
		return null;
	}
}
