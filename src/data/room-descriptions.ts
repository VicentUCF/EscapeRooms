/**
 * Original, spoiler-free editorial copy. Premises are paraphrased from the
 * operator pages linked in `source`; the group's scores remain in rooms.ts.
 * A null source means only the imported room name and scores were available.
 * Checked against public operator pages on 5 November 2026.
 */
type RoomDescription = { text: string; source: string | null };

export const roomDescriptions: Record<string, RoomDescription> = {
  "atraco-al-compadre": {
    text: "Un banco mexicano, una banda improvisada y un golpe que exige algo más que abrir una caja fuerte. La propuesta de Start Play mezcla atraco, personajes y acción; nuestro grupo le dio la máxima nota en todos los criterios evaluados.",
    source: "https://startplay.es/escape-room-en-murcia/",
  },
  "peluqueria": {
    text: "Un chantaje a David Hasselhoff conduce hasta la peluquería de Remigio, donde el humor convive con la tensión. En nuestra ficha sobresalen la ambientación, las pruebas y el final, todos con un 10.",
    source: "https://thexdoor.com/la-peluqueria/",
  },
  "the-night-of-meteor": {
    text: "La familia Crowell desapareció de la vida de Silver City tras la llegada de un meteorito. Esta aventura con aire de videojuego invita a investigar su mansión; nuestra valoración destaca la ambientación, las pruebas y la historia.",
    source: "https://www.escapelabvalencia.es/",
  },
  "la-tienda-de-te-senor-miyagi": {
    text: "El señor Miyagi necesita ayuda en su pequeña tienda de té de Tokio. La aventura apuesta por el humor y las sorpresas, mientras que nuestra puntuación destaca especialmente su introducción, ambientación y desenlace.",
    source: "https://donescape.es/",
  },
  "psicofonia": {
    text: "La segunda entrega de la saga Paranoia lleva la investigación a los apartamentos Blue Creek, donde las voces forman parte del misterio. El grupo puntuó con un 10 la actuación, la ambientación, la introducción y el final.",
    source: "https://terrorstories.com/valencia/en/psicofonia-escape-room",
  },
  "caronte": {
    text: "Una clínica de ensayos experimentales abre sus puertas a nuevos participantes. Caronte combina esa premisa inquietante con terror de supervivencia; el grupo valoró especialmente su actuación, su introducción y su intensidad.",
    source: "https://terrorstories.com/valencia/en/caronte-escape-room",
  },
  "sesion-de-soterismo-exorcista": {
    text: "Expediente de terror cuyo nombre oficial y operador siguen por confirmar. Hasta verificar su argumento, el dato fiable es nuestra valoración: actuación, introducción y final recibieron un 10.",
    source: null,
  },
  "la-guarida": {
    text: "Una propuesta de miedo de Spain in Game en la que la tensión acompaña al equipo durante la partida. En nuestra valoración sobresalen la actuación, la ambientación y la intensidad del terror.",
    source: "https://spainingame.com/juegos/",
  },
  "paranoia": {
    text: "El Hospital Mental Las Virtudes es el escenario de esta primera entrega de terror psicológico de la saga Paranoia. El grupo destacó la actuación, el final y la intensidad del miedo con sendos dieces.",
    source: "https://terrorstories.com/valencia",
  },
  "hotel-de-los-suicidas": {
    text: "La antigua Posada DuMont arrastra una leyenda sobre quienes se alojan entre sus paredes. Esta experiencia de Evil House convierte el tiempo en parte de la tensión; nuestro grupo valoró especialmente su actuación y ambientación.",
    source: "https://terrorstories.com/valencia/en/hotel-de-los-suicidas-escape-room",
  },
  "sanatoriun": {
    text: "Sanatorium 2 lleva al grupo a un hospital abandonado en una experiencia de terror y supervivencia. Su ambientación y su historia recibieron un 10 en nuestra ficha, los dos apartados mejor puntuados por el grupo.",
    source: "https://www.sanatoriumescapealicante.com/",
  },
  "lechero": {
    text: "En La Hoya desaparecen vecinos y todas las sospechas parecen conducir al lechero. El equipo se infiltra como habitantes del pueblo para investigar el caso; nuestra ficha destaca la actuación, la ambientación y la historia.",
    source: "https://sabotajerooms.com/el-lechero/",
  },
  "anillo-del-dragon": {
    text: "Una misión de fantasía dentro del universo de Cronos propone seguir el rastro del Dragón Negro en otro mundo. La introducción y la actuación son los aspectos que más destacó nuestro grupo.",
    source: "https://www.cronosvalencia.com/el-anillo-del-dragon/",
  },
  "casa-sin-ojos": {
    text: "Un mensaje amenazante obliga a entrar en una casa desconocida para recuperar un botín. La Casa sin Ojos plantea tensión y decisiones bajo presión; en nuestra ficha la actuación obtuvo la nota más alta.",
    source: "https://mrwolley.com/",
  },
  "alojamientos-becker": {
    text: "Lo que prometía ser una estancia tranquila en unas casitas apartadas se convierte en una investigación. En Alojamientos Becker, la historia, la actuación, la ambientación y las pruebas comparten la mejor nota de nuestra ficha.",
    source: "https://misterisescaperoom.es/",
  },
  "9-1-blackout": {
    text: "9:1 es una experiencia de terror de The Blackout Escape centrada en la tensión. La actuación, la ambientación y el miedo son los criterios mejor valorados por nuestro grupo.",
    source: "https://theblackoutescape.com/",
  },
  "fantasmas": {
    text: "Una tabla esmeralda da pie a una investigación paranormal en esta sala de Spain in Game. En nuestra valoración, el terror alcanzó un 10 y fue el apartado que más destacó.",
    source: "https://spainingame.com/juegos/",
  },
  "jugueteria-mimitos": {
    text: "En una juguetería que antes era un refugio de fantasía empiezan a ocurrir cosas difíciles de explicar. La Juguetería Mimitos mezcla misterio y tensión; la historia recibió la nota más alta de nuestra ficha.",
    source: "https://tortugasalafuga.com/la-jugueteria-mimitos/",
  },
  "remigio-vs-trump": {
    text: "La modalidad Versus reúne los juegos de Remigio y Trump en una experiencia de equipos y objetivos enfrentados. En nuestra ficha, ambientación, pruebas y final son los criterios mejor puntuados.",
    source: "https://www.thexdooralicante.com/versus/",
  },
  "the-hammer-killer": {
    text: "Un crimen disparatado convierte al equipo en investigadores y deja espacio para el humor. Hammer Killer combina detectives y enigmas; nuestra valoración destaca la introducción y la actuación.",
    source: "https://theworksofmadness.com/hammer-killer-escape-room-alicante/",
  },
  "el-secreto-de-alcatraz": {
    text: "La famosa prisión de Alcatraz sirve de escenario para reconstruir una fuga rodeada de preguntas. En nuestra ficha, la actuación y el final recibieron las notas más altas.",
    source: "https://www.excapexperience.com/el-secreto-de-alcatraz/",
  },
  "jardin-del-buda": {
    text: "Una banda de ladrones se hace pasar por clientela de un restaurante para dar un golpe contra un líder mafioso. Nuestra valoración de esta misión destaca la ambientación y la introducción.",
    source: "https://factoriaescaperoom.com/reservar/",
  },
  "kilometro-18": {
    text: "Una avería interrumpe un viaje entre amigos y uno de ellos desaparece cerca de un lugar abandonado. KM18 juega con esa búsqueda y la tensión; las pruebas y la ambientación son los puntos mejor valorados por el grupo.",
    source: "https://locusfugae.com/km18-escape-room",
  },
  "loco-del-callejon": {
    text: "Un fin de semana en un motel toma otro rumbo cuando alguien empieza a observar al grupo. Esta experiencia de tensión de Colors recibió su mejor puntuación en ambientación.",
    source: "https://colorsescaperoom.com/valencia",
  },
  "la-beerdad-oculta": {
    text: "Un equipo de investigadores poco convencional sigue las pistas de una desaparición en Springfield. La Beerdad Oculta apuesta por el caso y sus escenarios; la ambientación fue el aspecto mejor valorado por nuestro grupo.",
    source: "https://sabotajerooms.com/beerdad-oculta/",
  },
  "mazmorra": {
    text: "Run Rabbit propone vivir la experiencia de un prisionero medieval en La Mazmorra. La actuación y la ambientación comparten la mejor nota de nuestra ficha.",
    source: "https://runrabbit.es/",
  },
  "alien-invaders": {
    text: "Una organización secreta recluta al equipo para proteger la Tierra de una amenaza extraterrestre. Alien Invaders sitúa la misión cerca de unos salones recreativos; en nuestra ficha, actuación, ambientación, introducción y final empatan como aspectos mejor valorados.",
    source: "https://factoriaescaperoom.com/reservar/",
  },
  "anos-oscuros": {
    text: "La desaparición de dos niños en un internado en 1924 marca el inicio del misterio. Los Años Oscuros propone descubrir qué ocurrió; el terror y la actuación son los apartados mejor puntuados por nuestro grupo.",
    source: "https://thexdoor.com/",
  },
  "las-reliquias-de-judi": {
    text: "La leyenda de Judy, una reina vampira, lleva al equipo hasta una gruta y unas reliquias ocultas. En esta aventura gótica, las pruebas obtuvieron la mejor nota de nuestra valoración.",
    source: "https://theworksofmadness.com/reliquias-de-judy/",
  },
  "extintion": {
    text: "Un virus creado por una corporación farmacéutica ha provocado una crisis zombi. El equipo debe recuperar información de unas instalaciones secretas antes de que desaparezca; nuestra ficha destaca la intensidad del terror.",
    source: "https://www.ingeniousescaperoom.com/extinction/",
  },
  "comando-murcielago": {
    text: "Murciélagos: Operación Snow plantea una misión de equipo con aire de operación especial. Nuestra valoración señala la ambientación y las pruebas entre los apartados mejor puntuados.",
    source: "https://mysterytimevalencia.es/juegos/murcielagos-operacion-snow/",
  },
  "resident-corporation": {
    text: "La misión consiste en entrar en la corporación y desactivar el Proyecto Cronos. La sala ofrece varias modalidades; nuestro registro corresponde a la experiencia clasificada como aventura y destaca la ambientación.",
    source: "https://www.cronosvalencia.com/resident-corporation/",
  },
  "el-ultimo-dragon": {
    text: "El rumor de un dragón en manos enemigas pone en peligro al reino. Esta aventura fantástica de The X-Door propone actuar antes de que estalle el conflicto; nuestra ficha destaca la ambientación.",
    source: "https://thexdoor.com/",
  },
  "mortifagos": {
    text: "Una misión de magia oscura reúne al equipo alrededor del regreso del Señor Oscuro. En esta aventura de Black Rose, la ambientación es el aspecto que mejor puntuó nuestro grupo.",
    source: "https://blackrosevalencia.com/aventuras/",
  },
  "sotano": {
    text: "La desaparición de la familia Morgan dejó un crimen sin resolver y un sótano cerrado durante décadas. Esta investigación con actores ofrece suspense y terror; el final obtuvo la mejor nota de nuestro grupo.",
    source: "https://theworksofmadness.com/elsotano-escape-terror-alicante/",
  },
  "haunted-house": {
    text: "Haunted House es la propuesta de miedo de Run Rabbit: una casa donde la sensación de peligro guía la experiencia. En nuestra valoración, la ambientación, la introducción y el final recibieron las notas más altas.",
    source: "https://runrabbit.es/",
  },
  "el-viaje": {
    text: "Una expedición a unas ruinas misteriosas impulsa la búsqueda de los tesoros de Kokulkan. Esta aventura de Spain in Game recibió sus mejores notas del grupo en la introducción y las pruebas.",
    source: "https://spainingame.com/juegos/",
  },
  "la-herencia-del-panteon": {
    text: "El panteón de la familia Ugía de Perro Negro guarda una herencia y una maldición que hay que sortear. En nuestra ficha, la ambientación fue el criterio mejor puntuado.",
    source: "https://momentescape.es/",
  },
  "portales-malfoy": {
    text: "La magia peligra cuando unos portales dimensionales agotan la energía de las varitas. Portales Malffoy propone cerrar esa amenaza en equipo; la ambientación recibió nuestra mejor nota.",
    source: "https://momentescape.es/portalesmalffoy_sala/",
  },
  "portales": {
    text: "En una ciudad subterránea del futuro, un científico abre portales para buscar los ingredientes de un antídoto. Esta aventura de ciencia ficción mezcla viajes y humor; nuestra ficha destaca la actuación.",
    source: "https://thecityescaperoom.com/valencia/portales-escape-room",
  },
  "no-respires": {
    text: "Una tormenta obliga al grupo a refugiarse en la cabaña de una familia desaparecida. No respires convierte el silencio en parte de la misión; en nuestra valoración, la ambientación y la historia obtuvieron las notas más altas.",
    source: "https://classicescaperoom.com/nightmare-escape-room",
  },
  "elisabeth": {
    text: "La historia de una niña y un antiguo orfanato da forma a esta sala de terror de Moment Escape. En nuestra ficha, la ambientación y las pruebas son los aspectos mejor puntuados.",
    source: "https://momentescape.es/elisabeth-sala/",
  },
  "las-maravillas-de-alicia": {
    text: "La Experiencia Carmín traslada al equipo a una aventura inspirada en el universo de Alicia. En nuestra valoración, la ambientación fue el apartado mejor puntuado.",
    source: "https://colorsescaperoom.com/valencia",
  },
  "corredor-de-la-muerte": {
    text: "Una prisión estadounidense en 1963 es el escenario de una misión para recuperar un elixir. Cronos presenta la sala como aventura histórica sin miedo; nuestra ficha destaca la actuación.",
    source: "https://www.cronosvalencia.com/el-corredor-de-la-muerte/",
  },
  "la-pelicula": {
    text: "El equipo acude a un preestreno privado que termina por involucrarlo en la historia proyectada. Esta sala de Terror Stories juega con el cine y la amenaza; nuestra ficha destaca la ambientación y la historia.",
    source: "https://terrorstories.com/valencia",
  },
  "la-purga": {
    text: "Durante una noche en la que cualquier delito es legal, una empresa de seguridad promete proteger al grupo. La Purga convierte esa promesa en el punto de partida de una experiencia de tensión; nuestra ficha destaca la ambientación.",
    source: "https://www.exitvalencia.com/la-purga/",
  },
  "reliquias-harry-potter": {
    text: "Una amenaza de magia oscura obliga a entrar en un castillo y detener el regreso del Señor Oscuro. En Las Reliquias Oscuras, la ambientación fue el aspecto mejor valorado por nuestro grupo.",
    source: "https://academiademagiaescaperoom.com/valencia/las-reliquias-oscuras-escape-room",
  },
  "vallhala": {
    text: "La mitología nórdica y las pruebas de Odín marcan esta aventura fantástica de Black Rose. En nuestra ficha, las pruebas obtuvieron la nota más alta.",
    source: "https://blackrosevalencia.com/aventuras/",
  },
  "apocalipsis-2076": {
    text: "Una misión ambientada en un futuro apocalíptico pone al equipo frente a una amenaza para la humanidad. Nuestra ficha de 2076 destaca las pruebas entre los criterios evaluados.",
    source: "https://classicescaperoom.com/2076-el-apocalipsis-escape-room",
  },
  "el-tesoro-del-jaguar": {
    text: "Una expedición se adentra en las ruinas mayas de Ek Balam en busca de un tesoro custodiado, según la leyenda, por un jaguar. En nuestra valoración, las pruebas recibieron la nota más alta.",
    source: "https://www.cronoroom.com/es/escape-room/el-tesoro-del-jaguar",
  },
  "atraco-a-central-bank": {
    text: "Atraco a Central Bank sitúa al equipo ante un golpe bancario que exige resolver pruebas y coordinarse. Nuestra ficha recoge una nota final de 6,2 sobre 10 y permite consultar cada criterio por separado.",
    source: "https://classicescaperoom.com/",
  },
  "psyquiatricum": {
    text: "El equipo entra en un antiguo hospital psiquiátrico para investigar los informes de un ala de aislamiento. Psyquiatricum presenta un misterio de tensión; en nuestra ficha, actuación e introducción obtuvieron las notas más altas.",
    source: "https://escapeconundrum.com/psyq/",
  },
  "casa-maldita": {
    text: "La Casa Maldita plantea una experiencia de terror alrededor de una vivienda que da nombre a la sala. Nuestra ficha permite comparar la intensidad del miedo con la actuación, las pruebas y el resto de criterios puntuados.",
    source: "https://www.jumperescaperoom.com/reserva/reserva-la-casa-maldita/",
  },
  "saw": {
    text: "Una fábrica abandonada inspirada en SAW se convierte en una carrera para descifrar enigmas y salir de sus trampas. El operador la describe como una experiencia de tensión; nuestra ficha la conserva en la categoría de terror del ranking.",
    source: "https://momentescape.es/saw-sala/",
  },
  "el-ermitano": {
    text: "La Maldición de El Ermitaño es una experiencia de misterio y terror de Get Out. Nuestra ficha recoge su valoración desglosada para que puedas consultar qué puntuó el grupo en cada aspecto.",
    source: "https://getoutescaperoom.es/experiencias/",
  },
  "los-inocentes": {
    text: "Una clínica de salud mental presta su nombre a esta sala de Get Out, donde mantenerse a salvo forma parte del reto. Se trata de un expediente de terror distinto del nombre de nuestro colectivo; aquí puedes ver nuestra puntuación completa.",
    source: "https://getoutescaperoom.es/experiencias/",
  },
  "laboratorio": {
    text: "Un agente ha desaparecido mientras investigaba un virus en Draco Corp. El equipo debe infiltrarse en el laboratorio y recuperar los datos de una vacuna; nuestra ficha recoge una nota final de 4 sobre 10.",
    source: "https://escaperoomgandia.es/reservalab/",
  },
} satisfies Record<string, RoomDescription>;
