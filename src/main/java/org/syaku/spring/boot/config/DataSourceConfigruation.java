package org.syaku.spring.boot.config;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.naming.NamingException;
import javax.sql.DataSource;
import java.util.Properties;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Configuration
public class DataSourceConfigruation {

	@Autowired private Properties config;

	@Bean(destroyMethod = "close")
	public DataSource dataSource() throws NamingException {
		BasicDataSource dataSource = new BasicDataSource();

		String driverClassName = config.getProperty("dataSource.driverClassName");
		String url = config.getProperty("dataSource.url");
		String username = config.getProperty("dataSource.username");
		String password = config.getProperty("dataSource.password");

		String validationQuery = config.getProperty("dataSource.validationQuery");

		dataSource.setDriverClassName(driverClassName);
		dataSource.setUrl(url);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		dataSource.setValidationQuery(validationQuery);

		return dataSource;
	}
}
