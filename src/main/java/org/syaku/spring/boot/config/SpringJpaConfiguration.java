package org.syaku.spring.boot.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Enumeration;
import java.util.Properties;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories("org.syaku.spring.apps.*.dao")
public class SpringJpaConfiguration {
	private static final Logger logger = LoggerFactory.getLogger(SpringJpaConfiguration.class);

	@Autowired
	private DataSource dataSource;

	@Autowired
	private Properties config;

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean manager = new LocalContainerEntityManagerFactoryBean();

		Properties jpaProperties = new Properties();
		for(Enumeration<String> en = (Enumeration<String>) config.propertyNames(); en.hasMoreElements();) {
			String key = en.nextElement();
			if (StringUtils.startsWithIgnoreCase(key, "jpa.hibernate")) {
				jpaProperties.setProperty(key.replace("jpa.", ""), config.getProperty(key));
			}
		}

		manager.setDataSource(dataSource);
		manager.setPackagesToScan(config.getProperty("jpa.packagesToScan"));
		manager.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		manager.setJpaProperties(jpaProperties);

		return manager;
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
		return new JpaTransactionManager(entityManagerFactory);
	}

	@Bean
	public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
		return new PersistenceExceptionTranslationPostProcessor();
	}

}
