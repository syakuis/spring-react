package org.syaku.spring.config.servlet;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.FilterType;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 * @since 2017. 3. 8.
 */
@Configuration
@EnableWebMvc
@EnableAspectJAutoProxy
@ComponentScan(
		basePackages = "org.syaku.spring.apps",
		useDefaultFilters = false,
		includeFilters = {
				@ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Controller.class)
		}
)
public class ServletConfiguration {
}
