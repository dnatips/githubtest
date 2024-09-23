package com.sb.helloworld;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.*;
import static org.assertj.core.api.Assertions.*;
import org.springframework.boot.test.context.*;

@SpringBootTest
public class SmokeTest {

    @Autowired
	private HelloController controller;

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}
}
