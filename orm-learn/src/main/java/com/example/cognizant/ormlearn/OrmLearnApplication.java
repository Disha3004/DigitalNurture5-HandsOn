@Autowired
CountryService service;

@Bean
CommandLineRunner runner() {

    return args -> {

        service.getAllCountries()
                .forEach(System.out::println);

    };

}