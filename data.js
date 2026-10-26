// BASE DE DATOS ENCICLOPÉDICA Y COMPLETA DE PÉNDULO HEBREO (METUTELET)
// Formación Esencial y Avanzada

const COURSE_DATA = {
  // 1. DICCIONARIO AMPLIADO DE ETIQUETAS (MÁS DE 40 ETIQUETAS)
  labels: [
    // --- APERTURA Y CIERRE ---
    {
      id: "campo_electromagnetico",
      category: "apertura",
      spanish: "Campo Electromagnético (Abrir)",
      hebrew: "שדה אלקטרומגנטי",
      phonetic: "Sadeh Elektromagneti",
      face: "ranurada",
      direction: "horario",
      description: "Etiqueta maestra obligatoria al inicio de cualquier sesión. Activa la resonancia bioeléctrica del biocampo humano haciéndolo receptivo y maleable a las frecuencias de sanación.",
      howToUse: "Cara con 2 RANURAS hacia abajo. Gira hacia la DERECHA (sentido horario) realizando 3 pasadas lentas y continuas de la coronilla a los pies a unos 20-30 cm del cuerpo físico (o sobre el testigo/plantilla a distancia).",
      clinicalNotes: "Si la persona está muy tensa o escéptica, realiza una 4ª pasada deteniéndote 10 segundos sobre el chakra timo (entre corazón y garganta)."
    },
    {
      id: "cerrar_proceso",
      category: "apertura",
      spanish: "Cerrar Proceso",
      hebrew: "סגור תהליך",
      phonetic: "Segor Tahalij",
      face: "ranurada",
      direction: "horario",
      description: "Sella herméticamente los vórtices áuricos abiertos durante el trabajo. Evita que la persona quede hipersensible o expuesta a cargas electromagnéticas externas en las horas posteriores.",
      howToUse: "Cara RANURADA hacia abajo. Realiza 3 pasadas lentas de la cabeza a los pies en sentido horario.",
      clinicalNotes: "Imprescindible tanto en autotratamiento como en sesiones presenciales o a distancia. Nunca dejes una sesión a medias sin pasar esta etiqueta."
    },
    {
      id: "dorado_aurico",
      category: "apertura",
      spanish: "Dorado Áurico (Sellar y Blindar)",
      hebrew: "זהב הילה",
      phonetic: "Zahav Hilah",
      face: "ranurada",
      direction: "horario",
      description: "Deposita una película etérica de altísima frecuencia dorada (580-590 THz). Restaura microfisuras en el aura y crea un blindaje que impide la reincidencia de parásitos o larvas.",
      howToUse: "Cara RANURADA hacia abajo. Gira en sentido horario describiendo un óvalo que envuelva a la persona de pies a cabeza.",
      clinicalNotes: "Especialmente recomendada tras limpiar miasmas luéticos o realizar cortes de cordones kármicos."
    },
    {
      id: "estrella_david",
      category: "apertura",
      spanish: "Escudo de Protección (Estrella de David)",
      hebrew: "מגן דוד",
      phonetic: "Maguén David",
      face: "ranurada",
      direction: "horario",
      description: "Hexagrama sagrado cabalístico que unifica las energías celestiales (triángulo descendente) y terrenales (triángulo ascendente). Máxima protección contra vampirismo psíquico.",
      howToUse: "Cara RANURADA hacia abajo. Gira en sentido horario sobre el chakra corazón, en la puerta de entrada de una casa o en el centro de un negocio.",
      clinicalNotes: "Úsala al principio sobre ti misma si vas a tratar a una persona con cargas emocionales muy densas o depresión grave."
    },

    // --- DIAGNÓSTICO (TESTEO - CARA LISA) ---
    {
      id: "miasma_general",
      category: "diagnostico",
      spanish: "Miasma General",
      hebrew: "מיאסמה",
      phonetic: "Miasma",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Detecta memorias celulares de desequilibrio biológico o predisposición miasmática en las 7 capas del aura antes de que se somatice en enfermedad física.",
      howToUse: "Cara LISA hacia abajo. Pasa el péndulo quieto sobre cada chakra a diferentes distancias (5 cm = Capa 1, 15 cm = Capa 2, 30 cm = Capa 3, hasta 1,2 m = Capa 7). Si empieza a girar a la IZQUIERDA espontáneamente, hay miasma en esa capa.",
      clinicalNotes: "Un miasma en Capa 1 indica que ya está afectando a la biología física. En Capas 6 o 7 indica una memoria ancestral o lealtad inconsciente que aún no ha cristalizado."
    },
    {
      id: "miasma_psorico",
      category: "diagnostico",
      spanish: "Miasma Psórico (Deficiencia / Falta)",
      hebrew: "מיאסמה פסורית",
      phonetic: "Miasma Psorit",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Se manifiesta como carencia, debilidad de defensas, fatiga adrenal, hipotiroidismo, sensación de incapacidad, pobreza o desánimo vital.",
      howToUse: "Cara LISA hacia abajo. Testea chakra por chakra.",
      clinicalNotes: "Suele resonar intensamente en el 1º chakra (falta de seguridad/dinero) y en el 3º chakra (baja autoestima)."
    },
    {
      id: "miasma_sicotico",
      category: "diagnostico",
      spanish: "Miasma Sicótico (Exceso / Retención)",
      hebrew: "מיאסמה סיקוטית",
      phonetic: "Miasma Sikotit",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Se manifiesta como proliferación, acumulación, quistes, retención de líquidos, sobrepeso, apego material obsesivo o incapacidad para delegar.",
      howToUse: "Cara LISA hacia abajo. Giro antihorario confirma presencia en ese vórtice.",
      clinicalNotes: "Muy frecuente en personas con dificultad para soltar relaciones del pasado o en órganos congestionados (hígado, colon)."
    },
    {
      id: "miasma_luetico",
      category: "diagnostico",
      spanish: "Miasma Luético (Destrucción / Degeneración)",
      hebrew: "מיאסמה לואטית",
      phonetic: "Miasma Luatit",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Indica patrones de autodestrucción celular, enfermedades autoinmunes, úlceras, depresión profunda con ideación autodestructiva o adicciones severas.",
      howToUse: "Cara LISA hacia abajo. Requiere posterior desgravado profundo con tintura de muérdago e irradiación prolongada de Sanación Completa.",
      clinicalNotes: "Aborda la raíz con extrema compasión y paciencia; requiere 3 o más sesiones espaciadas cada 7 días."
    },
    {
      id: "magia",
      category: "diagnostico",
      spanish: "Magia / Ataque Energético",
      hebrew: "מאגיה",
      phonetic: "Magia",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Detecta trabajos energéticos conscientes, rituales o proyecciones continuadas de odio, rencor y destrucción emitidas por terceros hacia la persona.",
      howToUse: "Cara LISA hacia abajo. Se testea especialmente en el 3º chakra (plexo solar), 4º chakra (corazón) y nuca (bulbo raquídeo).",
      clinicalNotes: "Si da positivo en capas 1 y 2, la persona experimenta bloqueos repentinos en todas las áreas de su vida o accidentes domésticos inexplicables."
    },
    {
      id: "magia_psiquica",
      category: "diagnostico",
      spanish: "Magia Psíquica / Formas-Pensamiento",
      hebrew: "מאגיה נפשית",
      phonetic: "Magia Nafshit",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Pensamientos obsesivos de celos, envidia o rencor que una persona cercana emite de manera constante hacia el consultante.",
      howToUse: "Cara LISA hacia abajo. Suele manifestarse en el 6º chakra (entrecejo) provocando dolores de cabeza y pesadez en la frente.",
      clinicalNotes: "Se limpia con gran facilidad mediante la etiqueta 'Limpiar Cuerpo y Lugar' y 'Paz'."
    },
    {
      id: "mal_de_ojo",
      category: "diagnostico",
      spanish: "Mal de Ojo (Envidia y Malquerencia)",
      hebrew: "עין הרע",
      phonetic: "Ayin Hará",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Sobrecarga de baja frecuencia producida por miradas cargadas de envidia o admiración con resentimiento ('ojos pesados').",
      howToUse: "Cara LISA hacia abajo. Frecuente en bebés, niños, o tras eventos sociales exitosos.",
      clinicalNotes: "Suele desaparecer en una sola sesión de 10 minutos limpiando plexo solar y coronilla."
    },
    {
      id: "larvas_astrales",
      category: "diagnostico",
      spanish: "Larvas Astrales / Parásitos Etéricos",
      hebrew: "טפילי הילה",
      phonetic: "Tefilei Hilah",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Formas parásitas que habitan el bajo astral y se enganchan en fisuras del aura (provocadas por alcohol, drogas, anestesias o shocks emocionales), drenando la vitalidad.",
      howToUse: "Cara LISA hacia abajo. Se testea a lo largo de la columna vertebral (especialmente vértebras dorsales y lumbares).",
      clinicalNotes: "La persona siente un cansancio abrumador al levantarse por la mañana aunque haya dormido 8 horas."
    },
    {
      id: "verde_negativo",
      category: "diagnostico",
      spanish: "Verde Eléctrico Negativo (V-)",
      hebrew: "ירוק שלילי",
      phonetic: "Yarok Shlili",
      face: "lisa",
      direction: "antihorario_detect",
      description: "La longitud de onda más corta y deshidratante descubierta por Chaumery y Bélizal. Señala geopatías (dormir sobre corrientes de agua subterráneas o cruces Hartmann) o polución electromagnética severa (antenas 5G, Wi-Fi pegado a la cabeza).",
      howToUse: "Cara LISA hacia abajo. Se testea sobre la persona o directamente sobre el colchón de su cama.",
      clinicalNotes: "Si la persona duerme sobre una vena de agua, enfermará repetidamente a pesar de las sesiones hasta que cambie de posición la cama."
    },
    {
      id: "lazos_karmicos",
      category: "diagnostico",
      spanish: "Lazos Kármicos / Reencarnación",
      hebrew: "גלגול נשמות",
      phonetic: "Gilgul Neshamot",
      face: "lisa",
      direction: "antihorario_detect",
      description: "Detecta contratos espirituales obsoletos, pactos de lealtad inconsciente, votos monásticos de pobreza/castidad de vidas pasadas o lazos de odio/deuda con personas clave.",
      howToUse: "Cara LISA hacia abajo. Testea en el 7º chakra (corona) y 4º chakra (corazón).",
      clinicalNotes: "Indispensable cuando la persona afirma: 'Por más que intento salir adelante con el dinero o el amor, algo invisible me frena'."
    },

    // --- LIMPIEZA, CORTE Y DESGRAVADO ---
    {
      id: "limpiar_cuerpo_lugar",
      category: "limpieza",
      spanish: "Limpiar Cuerpo y Lugar",
      hebrew: "נקה גוף ומקום",
      phonetic: "Nake Guf U-Makom",
      face: "ranurada",
      direction: "antihorario",
      description: "El desinfectante áurico universal. Desprende y disuelve todo residuo energético denso del cuerpo o del espacio habitacional.",
      howToUse: "Cara con 2 RANURAS hacia abajo. Gira hacia la IZQUIERDA (sentido antihorario) durante 1 a 2 minutos sobre la zona afectada.",
      clinicalNotes: "Visualiza un torbellino de luz blanca-azulada que barre la densidad y la envía a la tierra para su transmutación."
    },
    {
      id: "disolver",
      category: "limpieza",
      spanish: "Disolver / Deshacer Bloqueos",
      hebrew: "לפזר",
      phonetic: "Lefazer",
      face: "ranurada",
      direction: "antihorario",
      description: "Acción mecánica de dispersión energética para nudos, quistes etéricos, contracturas musculares o pensamientos fijos y obsesivos.",
      howToUse: "Cara RANURADA hacia abajo. Giro antihorario focalizado en el punto de tensión durante 2 minutos.",
      clinicalNotes: "Acompáñalo pidiendo al consultante que exhale profundamente por la boca entreabierta."
    },
    {
      id: "cortar_lazos",
      category: "limpieza",
      spanish: "Cortar Lazos Tóxicos",
      hebrew: "לנתק",
      phonetic: "Lenatek",
      face: "ranurada",
      direction: "antihorario",
      description: "Corta cordones etéricos de dependencia, manipulación, vampirismo o enganches afectivos dañinos con exparejas, padres dominantes o compañeros de trabajo.",
      howToUse: "Cara RANURADA hacia abajo. Gira en sentido antihorario frente al plexo solar (boca del estómago) y ombligo.",
      clinicalNotes: "No destruye el amor; destruye la atadura patológica y devuelve la soberanía energética a la persona."
    },
    {
      id: "liberacion_emocional",
      category: "limpieza",
      spanish: "Liberación Emocional (Código Canalizado)",
      hebrew: "שחרור",
      phonetic: "Shijrur",
      face: "ranurada",
      direction: "antihorario",
      description: "Permite desahogar llanto reprimido, nudos en la garganta, opresión torácica y dolor de duelos antiguos no llorados.",
      howToUse: "Cara RANURADA hacia abajo. Giro antihorario sobre garganta y corazón.",
      clinicalNotes: "Es normal y sanador que a la persona se le escape un bostezo profundo, un suspiro o alguna lágrima liberadora."
    },
    {
      id: "borrar_memoria_celular",
      category: "limpieza",
      spanish: "Borrar Memoria Celular",
      hebrew: "מחק זיכרון תאי",
      phonetic: "Mejak Zikaron Tai",
      face: "ranurada",
      direction: "antihorario",
      description: "Elimina la huella electromagnética de traumas, cirugías, accidentes de tráfico, violencias o shocks emocionales grabados en las mitocondrias celulares.",
      howToUse: "Cara RANURADA hacia abajo. Giro antihorario durante 3 minutos sobre la cicatriz o el chakra correspondiente.",
      clinicalNotes: "Especialmente útil sobre cicatrices quirúrgicas que suelen actuar como cortocircuitos en los meridianos de acupuntura."
    },
    {
      id: "desgravar_miasma",
      category: "limpieza",
      spanish: "Desgravar y Desprogramar",
      hebrew: "למחוק מידע",
      phonetic: "Limjok Meida",
      face: "ranurada",
      direction: "antihorario",
      description: "Comando vibracional para resetear la frecuencia alterada de un órgano y prepararlo para la grabación del patrón sano original.",
      howToUse: "Cara RANURADA hacia abajo. Giro antihorario continuo.",
      clinicalNotes: "Pásalo siempre antes de irradiar 'Sanación Completa' en patologías crónicas."
    },

    // --- ARMONIZACIÓN, REPROGRAMACIÓN E IRRADIACIÓN ---
    {
      id: "paz",
      category: "irradiacion",
      spanish: "Paz / Armonía Cósmica",
      hebrew: "שלום",
      phonetic: "Shalom",
      face: "ranurada",
      direction: "horario",
      description: "La palabra sagrada que condensa la plenitud, la reconciliación y el sosiego absoluto. Calma el sistema nervioso simpático y estimula el nervio vago.",
      howToUse: "Cara RANURADA hacia abajo. Giro a la DERECHA (sentido horario) sobre el entrecejo y el corazón hasta que el péndulo se detenga solo.",
      clinicalNotes: "Es la etiqueta por excelencia para ansiedad, insomnio, ataques de pánico y discusiones de pareja."
    },
    {
      id: "amor_incondicional",
      category: "irradiacion",
      spanish: "Amor Incondicional (Jésed)",
      hebrew: "אהבה ללא תנאי",
      phonetic: "Ahava Lelo Tnai",
      face: "ranurada",
      direction: "horario",
      description: "Emite la frecuencia del cuarto centro (Anahata). Restaura el merecimiento, diluye la sensación de abandono y sana la herida del rechazo infantil.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en el centro del pecho.",
      clinicalNotes: "Combínala siempre con el protocolo de perdón a los padres o tras una ruptura sentimental."
    },
    {
      id: "luz_divina",
      category: "irradiacion",
      spanish: "Luz Divina (Or Ein Sof)",
      hebrew: "אור אלוהי",
      phonetic: "Or Elohi",
      face: "ranurada",
      direction: "horario",
      description: "Frecuencia de purísima luz que eleva la vibración Bovis a más de 18.000 UB. Disuelve la niebla mental, la depresión reactiva y aporta claridad espiritual.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en la coronilla (7º chakra) irradiando a todo el cuerpo.",
      clinicalNotes: "Excelente cuando una persona no sabe qué decisión tomar en su vida y siente su mente nublada."
    },
    {
      id: "sanacion_completa",
      category: "irradiacion",
      spanish: "Sanación Completa (Refuá Shlemá)",
      hebrew: "רפואה שלמה",
      phonetic: "Refuá Shlemá",
      face: "ranurada",
      direction: "horario",
      description: "La plegaria milenaria cabalística para restablecer la integridad del cuerpo físico (*Refuat haGuf*) y del alma (*Refuat haNéfesh*).",
      howToUse: "Cara RANURADA hacia abajo. Giro horario directo sobre el órgano enfermo o sobre el plexo solar.",
      clinicalNotes: "Acompáñala con afirmaciones positivas de salud radiante."
    },
    {
      id: "alegria",
      category: "irradiacion",
      spanish: "Alegría de Vivir (Simjá)",
      hebrew: "שמחה",
      phonetic: "Simjá",
      face: "ranurada",
      direction: "horario",
      description: "Enciende la chispa vital, eleva las endorfinas y serotonina energéticas y disipa el abatimiento, la melancolía otoñal y la apatía.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en el 3º chakra (estómago) y timo.",
      clinicalNotes: "Maravillosa para personas mayores que han perdido la ilusión por salir a pasear o relacionarse."
    },
    {
      id: "fortaleza",
      category: "irradiacion",
      spanish: "Fortaleza Interior y Valor (Gevurá)",
      hebrew: "עוצמה",
      phonetic: "Otzmá",
      face: "ranurada",
      direction: "horario",
      description: "Despierta el guerrero de luz interior. Otorga disciplina, capacidad de poner límites sanos, resistencia física y coraje para afrontar cambios.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en el 1º chakra (raíz) y piernas.",
      clinicalNotes: "Ideal para personas complacientes que no saben decir 'NO' o personas en procesos de separación."
    },
    {
      id: "confianza",
      category: "irradiacion",
      spanish: "Confianza Absoluta (Bitajón)",
      hebrew: "ביטחון",
      phonetic: "Bitajón",
      face: "ranurada",
      direction: "horario",
      description: "Disuelve la necesidad neurótica de control y el miedo anticipatorio al futuro. Enraíza la certeza de que el universo sostiene cada paso.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en bajo vientre (2º chakra).",
      clinicalNotes: "Muy recomendada para autónomos, opositores o personas que inician un proyecto nuevo."
    },
    {
      id: "abundancia",
      category: "irradiacion",
      spanish: "Abundancia y Prosperidad (Shefa)",
      hebrew: "שפע",
      phonetic: "Shefa",
      face: "ranurada",
      direction: "horario",
      description: "Canaliza el flujo inagotable de bendiciones materiales y espirituales. Desbloquea la circulación del dinero como energía sagrada de intercambio.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en las palmas de las manos, 1º y 2º chakra, o sobre contratos y carteras.",
      clinicalNotes: "Trabájala conjuntamente con la sanación de la figura paterna (vínculo con la prosperidad exterior)."
    },
    {
      id: "sabiduria",
      category: "irradiacion",
      spanish: "Sabiduría y Discernimiento (Jojmá)",
      hebrew: "חכמה",
      phonetic: "Jojmá",
      face: "ranurada",
      direction: "horario",
      description: "Abre el canal de la intuición superior y la comprensión profunda de las leyes cósmicas. Facilita el estudio y la asimilación de conocimientos.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario en el 6º chakra (entrecejo).",
      clinicalNotes: "Pásatela a ti misma antes de estudiar las lecciones del curso."
    },
    {
      id: "unidad",
      category: "irradiacion",
      spanish: "Unidad y Coherencia (Ajadut)",
      hebrew: "אחדות",
      phonetic: "Ajadut",
      face: "ranurada",
      direction: "horario",
      description: "Alinea pensamientos, palabras y acciones en un solo vector de luz. Sana la contradicción interna ('quiero una cosa pero hago otra').",
      howToUse: "Cara RANURADA hacia abajo. Giro horario recorriendo toda la columna vertebral.",
      clinicalNotes: "Restaura la integración tras periodos de shock o crisis de identidad."
    },
    {
      id: "misil_de_luz",
      category: "irradiacion",
      spanish: "Misil de Luz (Código Especial)",
      hebrew: "טיל אור",
      phonetic: "Til Or",
      face: "ranurada",
      direction: "horario",
      description: "Técnica de choque del método Cristina Vicente. Concentra un haz ultrasónico de luz para pulverizar dolores agudos, cefaleas o congestiones energéticas tenaces.",
      howToUse: "Cara RANURADA hacia abajo. Giro horario rápido y concentrado en el punto exacto de la molestia durante 90 segundos.",
      clinicalNotes: "Sella siempre la zona tratada con Dorado Áurico para evitar que el tejido etérico quede sensible."
    },

    // --- LOS 7 CHAKRAS PRINCIPALES ---
    {
      id: "ch1_raiz",
      category: "chakras",
      spanish: "1º Chakra: Raíz (Muladhara / Shóresh)",
      hebrew: "שורש",
      phonetic: "Shóresh",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Tierra. Glándulas suprarrenales. Gobierna la supervivencia física, dinero, casa, enraizamiento, piernas, columna y huesos.",
      howToUse: "Cara ranurada. Gira en sentido horario en la base del coxis para asentar y estabilizar.",
      clinicalNotes: "Si está desvitalizado, la persona siente miedo a la escasez, frío en los pies y vértigos."
    },
    {
      id: "ch2_sacro",
      category: "chakras",
      spanish: "2º Chakra: Sacro (Svadhisthana / Yesod)",
      hebrew: "יסוד",
      phonetic: "Yesod",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Agua. Gónadas (ovarios/testículos). Gobierna las emociones, placer, sexualidad, creatividad, relaciones afectivas e intestinos.",
      howToUse: "Cara ranurada. Giro horario 3 dedos bajo el ombligo.",
      clinicalNotes: "Guarda memorias de abusos, represiones sexuales o culpas heredadas del linaje materno."
    },
    {
      id: "ch3_plexo",
      category: "chakras",
      spanish: "3º Chakra: Plexo Solar (Manipura / Shemesh)",
      hebrew: "מרכז שמש",
      phonetic: "Merkaz Shémesh",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Fuego. Páncreas, hígado, estómago y vesícula. Rige el poder personal, autoestima, límites y digestión tanto biológica como de experiencias.",
      howToUse: "Cara ranurada. Giro horario en la boca del estómago.",
      clinicalNotes: "Es el centro donde más magias psíquicas y 'mal de ojo' se anclan por ser la puerta de entrada emocional al mundo."
    },
    {
      id: "ch4_corazon",
      category: "chakras",
      spanish: "4º Chakra: Corazón (Anahata / Lev)",
      hebrew: "לב",
      phonetic: "Lev",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Aire. Glándula Timo. El puente sagrado entre los chakras inferiores terrenales y los superiores celestiales. Capacidad de dar y recibir amor.",
      howToUse: "Cara ranurada. Giro horario en el centro del esternón.",
      clinicalNotes: "Si está cerrado, la persona se siente sola, desamparada o amargada. Su apertura produce lágrimas de alivio."
    },
    {
      id: "ch5_garganta",
      category: "chakras",
      spanish: "5º Chakra: Garganta (Vishuddha / Garón)",
      hebrew: "גרון",
      phonetic: "Garón",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Éter. Glándula Tiroides y paratiroides. Rige la comunicación auténtica, la expresión de la verdad, la creatividad y la escucha activa.",
      howToUse: "Cara ranurada. Giro horario en la laringe.",
      clinicalNotes: "Resiente las cosas que nos callamos por no generar conflicto familiar o las mentiras sostenidas en el tiempo."
    },
    {
      id: "ch6_tercer_ojo",
      category: "chakras",
      spanish: "6º Chakra: Tercer Ojo (Ajna / Áyin Shlishit)",
      hebrew: "עין שלישית",
      phonetic: "Áyin Shlishit",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Luz. Glándula Pituitaria (hipófisis). Ojo interior de la intuición, discernimiento espiritual, descanso psíquico y visión lúcida.",
      howToUse: "Cara ranurada. Giro horario en el entrecejo.",
      clinicalNotes: "Trátalo en casos de migrañas, pesadillas, visión borrosa emocional o incapacidad para meditar."
    },
    {
      id: "ch7_corona",
      category: "chakras",
      spanish: "7º Chakra: Corona (Sahasrara / Kéter)",
      hebrew: "כתר",
      phonetic: "Kéter",
      face: "ranurada",
      direction: "horario",
      description: "Elemento Conciencia pura. Glándula Pineal. Conexión con la Fuente divina, la trascendencia, el propósito cósmico del alma y la paz universal.",
      howToUse: "Cara ranurada. Giro horario sobre la coronilla de la cabeza.",
      clinicalNotes: "La puerta por donde entra la energía pránica superior. Su sellado al final con Dorado Áurico protege toda la estructura."
    }
  ],

  // 2. TEMARIO COMPLETO DETALLADO Y PROFUNDO (25 MÓDULOS + 3 BONUS)
  modules: [
    {
      number: 1,
      title: "Introducción, Hoja de Ruta y Mentalidad del Terapeuta",
      tag: "Fundamentos",
      duration: "18 min lectura",
      summary: "Historia milenaria del Metutelet, física cuántica de las ondas de forma y los 3 pilares del terapeuta impecable.",
      content: `
        <h3>1. Origen e Historia del Péndulo Hebreo (*Metutelet*)</h3>
        <p>El péndulo hebreo, conocido tradicionalmente como <em>Metutelet</em>, fue redescubierto a principios del siglo XX por el radiestesista y geobiólogo francés <strong>Pierre Baillod</strong>, y posteriormente sistematizado por eminentes investigadores de la Escuela Francesa de Radiestesia como Chaumery, Bélizal y el Abate Mermet. En las últimas décadas, maestras e investigadoras como <strong>Cristina Vicente</strong> han evolucionado el método dotándolo de protocolos clínicos ordenados para el hombre y la mujer del siglo XXI.</p>
        <p>A diferencia de los péndulos comunes de cuarzo o metal (que funcionan meramente como instrumentos pasivos de detección oracular), el péndulo hebreo es un <strong>dispositivo de emisión radiónica activa</strong>: no solo mide dónde está el desorden energético, sino que emite ondas electromagnéticas precisas para transmutar la materia sutil.</p>

        <h3>2. El Misterio de las Letras Hebreas: ¿Por qué funciona sin saber el idioma?</h3>
        <p>El hebreo no es una lengua convencional inventada para la comunicación comercial humana; es un <strong>alfabeto sagrado radiónico</strong> basado en la <em>Kabbalah</em>. Cada una de las 22 letras hebreas (<em>Otiyot</em>) es un ideograma geométrico que actúa como una antena fractal:</p>
        <ul>
          <li><strong>La Onda de Forma (*Onde de forme*):</strong> Así como un diapasón metálico afinado a 432 Hz hace entrar en resonancia por simpatía a otro diapasón situado a metros de distancia, la geometría sagrada de una palabra hebrea colocada sobre madera de haya emite una vibración fotónica medible que 'recuerda' a las células del paciente su frecuencia armónica original.</li>
          <li><strong>No requiere creencia ni fe:</strong> Funciona en personas profundamente escépticas, en animales, en plantas y en bebés. El campo bioelectromagnético responde a la física de la resonancia, no a la sugestión psicológica.</li>
        </ul>

        <h3>3. La Mentalidad y Ética del Terapeuta Impecable</h3>
        <div class="note-box">
          <strong>Los 3 Mandamientos del Sanador con Péndulo:</strong><br>
          1. <strong>Tú no sanas a nadie; tú eres el canal:</strong> La sanación la realiza la propia inteligencia celular del consultante al recibir la información correcta. Elimina la soberbia del ego sanador.<br>
          2. <strong>Neutralidad emocional absoluta:</strong> Nunca juzgues lo que encuentres (miasmas, magias, larvas). Manten la mente como un espejo limpio.<br>
          3. <strong>Respeto inquebrantable al Libre Albedrío:</strong> Jamás apliques el péndulo a escondidas a una expareja, un jefe o un familiar sin su consentimiento expreso. Violar el libre albedrío crea ataduras kármicas para el propio operador.
        </div>
      `
    },
    {
      number: 2,
      title: "Estructura Energética Humana: Fisiología Bioelectromagnética",
      tag: "Anatomía Sutil",
      duration: "22 min lectura",
      summary: "El campo electromagnético toroidal, los 7 chakras primarios + 14 secundarios y la anatomía precisa de las 7 capas del aura.",
      content: `
        <h3>1. El Biocampo Toroidal Humano</h3>
        <p>El corazón humano genera un campo electromagnético unas 5.000 veces más potente en magnetismo y 60 veces superior en voltaje que el del cerebro. Este campo adopta la forma geométrica de un <strong>toroide dinámico</strong> que rodea el cuerpo en todas direcciones. Cuando este toroide presenta 'abolladuras', fisuras o zonas de estancamiento, la energía vital (*Prana* o *Ruaj*) no circula, originando la sintomatología física.</p>

        <h3>2. Las 7 Capas del Aura al Detalle</h3>
        <p>La enfermedad nunca nace en el plano físico; desciende desde las capas superiores:</p>
        <table class="simple-table">
          <thead>
            <tr><th>Capa Áurica</th><th>Distancia al cuerpo</th><th>Cuerpo Sutil</th><th>Correspondencia y Síntoma cuando se bloquea</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Capa 1</strong></td><td>1 a 5 cm</td><td>Cuerpo Etérico</td><td>Copia exacta de órganos y músculos. Dolor físico, inflamación, agotamiento.</td></tr>
            <tr><td><strong>Capa 2</strong></td><td>5 a 15 cm</td><td>Cuerpo Emocional</td><td>Sentimientos bloqueados, miedos, angustia, culpas, tristeza enquistada.</td></tr>
            <tr><td><strong>Capa 3</strong></td><td>15 a 35 cm</td><td>Cuerpo Mental</td><td>Pensamientos obsesivos, rumiación mental, creencias limitantes de no merecimiento.</td></tr>
            <tr><td><strong>Capa 4</strong></td><td>35 a 60 cm</td><td>Cuerpo Astral</td><td>Puente entre lo personal y espiritual. Cordones de apego tóxico con exparejas o parientes.</td></tr>
            <tr><td><strong>Capa 5</strong></td><td>60 a 90 cm</td><td>Patrón Etérico</td><td>El molde arquitectónico de la salud. Deformidades por traumas graves o cirugías.</td></tr>
            <tr><td><strong>Capa 6</strong></td><td>90 a 120 cm</td><td>Cuerpo Celestial</td><td>Amor incondicional místico. Pérdida de fe, desesperanza existencial, cinismo.</td></tr>
            <tr><td><strong>Capa 7</strong></td><td>1,2 a 1,8 metros</td><td>Cuerpo Kéthérico</td><td>Propósito del alma y linaje ancestral. Contratos kármicos y votos ancestrales.</td></tr>
          </tbody>
        </table>

        <h3>3. El Sistema de 21 Chakras: Principales y Secundarios</h3>
        <p>Además de los 7 vórtices clásicos a lo largo de la columna vertebral, en el método avanzado se tratan centros secundarios clave:</p>
        <ul>
          <li><strong>Chakras de las Palmas de las Manos:</strong> Canales de emisión curativa y recepción de energía cósmica. Si se bloquean, nos cuesta dar o recibir afecto y dinero.</li>
          <li><strong>Chakras de las Plantas de los Pies:</strong> Enraizamiento a la Madre Tierra (*Gaya*). Descargan la estática nociva hacia el suelo. Su bloqueo genera insomnio y sensación de estar 'en las nubes'.</li>
          <li><strong>Chakra del Bazo (Costado izquierdo):</strong> Transmutador de prana físico y glóbulos rojos. Su congestión provoca anemia energética y defensas bajas.</li>
          <li><strong>Chakra Timo (Entre corazón y garganta):</strong> La glándula de la juventud y el amor propio. Activa la inmunidad biológica y la alegría de vivir.</li>
        </ul>
      `
    },
    {
      number: 3,
      title: "Protecciones Energéticas Avanzadas: El Protocolo Inexpugnable",
      tag: "Seguridad Clínica",
      duration: "20 min lectura",
      summary: "Burbuja de luz azul cobalto, canal telúrico de descarga, el escudo Maguén David y cómo limpiar tu espacio tras una sesión intensa.",
      content: `
        <h3>1. Por qué es indispensable protegerse (La ley de vasos comunicantes)</h3>
        <p>En física de fluidos, cuando dos recipientes con líquidos a diferente nivel se conectan, el nivel se iguala. En terapia energética sucede lo mismo: si tú como terapeuta abres tu campo áurico frente a una persona cargada de miasmas o dolor sin sellar tu propia energía, por simple gradiente de potencial absorberás parte de su pesadez. El terapeuta profesional <strong>nunca usa su propia energía vital; es solo un testigo y un canal neutro</strong>.</p>

        <h3>2. Los 3 Escudos de Protección Paso a Paso</h3>
        <h4>Escudo 1: La Esfera de Zafiro Cobalto</h4>
        <p>Antes de sentarte ante la camilla o la mesa de trabajo, ponte en pie con los pies descalzos sobre el suelo. Cierra los ojos e inhala profundamente por la nariz. Visualiza cómo desde tu corazón se expande una esfera de cristal azul zafiro impenetrable que te envuelve a un metro y medio de distancia. Decreta verbalmente:</p>
        <div class="quote-box">
          <em>"En el nombre del Creador de la Vida, activo mi escudo de luz zafiro. Soy un canal puro y perfecto de amor y sanación. Nada que vibre por debajo de la luz de la verdad puede tocarme, afectarme ni permanecer en mi campo. Hecho está."</em>
        </div>

        <h4>Escudo 2: El Canal Telúrico de Conexión a Tierra</h4>
        <p>Imagina que desde el final de tu columna vertebral y desde las plantas de tus pies se extienden unas raíces luminosas de color cobrizo que penetran en la tierra hasta el núcleo de magma fundido del planeta. Todo lo que desprendas en la sesión se desliza automáticamente por estas raíces hacia el centro de la Tierra, donde se transmuta instantáneamente en fertilidad.</p>

        <h4>Escudo 3: El Sello Cabalístico Maguén David</h4>
        <p>Coloca la etiqueta <strong>מגן דוד</strong> en tu péndulo con la cara ranurada hacia abajo. Hazla girar en sentido horario sobre tu propio esternón durante 60 segundos antes de comenzar la jornada. Sentirás cómo tu pecho se ensancha y tu respiración se vuelve profunda y serena.</p>

        <h3>3. Protocolo de Desconexión al Finalizar la Consulta</h3>
        <ol>
          <li>Corta el hilo etérico imaginario entre tú y el paciente frotando tus manos y haciendo un movimiento de 'tijera' con los dedos índice y corazón frente a tu ombligo.</li>
          <li>Abre el grifo de agua fría y lava tus manos desde los codos hasta las yemas de los dedos durante 30 segundos. El agua corriente arrastra la estática electromagnética residual.</li>
          <li>Ventila la habitación durante 5 minutos para renovar el aire ionizado.</li>
        </ol>
      `
    },
    {
      number: 4,
      title: "El Péndulo Hebreo: Física Radiónica, Anatomía y Dinámica",
      tag: "Herramienta",
      duration: "25 min lectura",
      summary: "Madera de haya (Fagus sylvatica), microestructura de las dos caras, la onda portadora de las ranuras y los 4 movimientos cinéticos.",
      content: `
        <h3>1. Por qué Madera de Haya (*Fagus sylvatica*)</h3>
        <p>No cualquier madera sirve para el péndulo hebreo. El haya es un árbol noble venerado desde la antigüedad por su <strong>absoluta neutralidad magnética</strong>:</p>
        <ul>
          <li>A diferencia de los metales (latón, cobre), no acumula memoria estática ni se sobrecarga con campos electromagnéticos artificiales.</li>
          <li>A diferencia de maderas resinosas o nudosas (pino, olivo), el haya tiene una fibra densa, uniforme y homogénea que permite que la onda de forma de las letras hebreas se propague de manera pura y sin refracciones parásitas.</li>
          <li>No debe llevar barnices químicos sintéticos que aíslen la madera. Debe estar al natural o tratada con cera de abeja pura.</li>
        </ul>

        <h3>2. Anatomía de las Dos Caras: Polaridad y Función</h3>
        <div class="note-box">
          <strong>A. CARA LISA (Plana): El Radar Receptor</strong><br>
          Se utiliza <strong>SIEMPRE con la cara lisa hacia abajo</strong> para el <strong>DIAGNÓSTICO Y TESTEO</strong>.<br>
          En esta postura, el péndulo se comporta como un sensor de radiación. Al colocar una etiqueta de diagnóstico (ej. <em>Miasma</em>), el péndulo busca en el campo áurico si existe esa misma frecuencia. Si la encuentra, el fenómeno físico de resonancia mórfica hace que el péndulo comience a girar espontáneamente en <strong>sentido antihorario (hacia la izquierda)</strong>.
        </div>

        <div class="note-box" style="margin-top: 12px;">
          <strong>B. CARA RANURADA (Con dos hendiduras paralelas): La Antena Emisora</strong><br>
          Se utiliza <strong>SIEMPRE con las 2 ranuras hacia abajo</strong> para <strong>IRRADIAR, SANAR Y LIMPIAR</strong>.<br>
          Las dos ranuras talladas en la base actúan como un resonador de cavidad que concentra la onda de forma del texto hebreo y crea una 'onda portadora' (*onde porteuse*) de alta penetración biofotónica que penetra en el tejido celular y en las capas del aura.
        </div>

        <h3>3. Los 4 Movimientos Cinéticos del Péndulo</h3>
        <ol>
          <li><strong>Giro a la Derecha (Sentido Horario):</strong> Emite, graba, aporta energía positiva, sella, eleva la vibración y consagra. Es el movimiento creador de la vida (*Yod* cabalística).</li>
          <li><strong>Giro a la Izquierda (Sentido Antihorario):</strong> Disuelve, descarga, desgrava y barre. Al testar con cara lisa, señala que <em>'se ha detectado la anomalía'</em>. Al limpiar con cara ranurada, borra el miasma.</li>
          <li><strong>Oscilación en Línea Recta:</strong> Indica neutralidad, camino despejado o respuesta de Sí/No en radiestesia auxiliar.</li>
          <li><strong>Inmovilidad o Giro Caótico:</strong> Señala confusión mental del operador o bloqueo geobiológico en la habitación. Respira hondo y vuelve a sintonizar.</li>
        </ol>

        <h3>4. Las Crisis de Sanación (*Detox Energético*)</h3>
        <p>Aproximadamente en 1 de cada 10 personas, tras una limpieza profunda de miasmas o larvas astrales, el organismo físico inicia una rápida eliminación de toxinas. El consultante puede experimentar: dolor de cabeza leve, sed insaciable, ganas de dormir durante 12 horas o sueños vívidos en las 24-48 horas posteriores. Esto <strong>no es un empeoramiento</strong>; es la prueba biológica de que el cuerpo está liberando la carga vieja. Recomienda beber 2 litros de agua mineral pura y descansar.</p>
      `
    },
    {
      number: 5,
      title: "Dominio y Calibración del Péndulo Auxiliar",
      tag: "Radiestesia",
      duration: "18 min lectura",
      summary: "Calibración del código neuromuscular ideomotor (Sí / No), preguntas de permiso ético y testeo en escalas porcentuales.",
      content: `
        <h3>1. La Fisiología del Reflejo Ideomotor</h3>
        <p>Cuando sostenemos un péndulo auxiliar, no lo mueve un espíritu ni una fuerza mágica externa: lo mueven <strong>microcontracciones musculares involuntarias de los dedos</strong> emitidas por nuestro sistema nervioso autónomo (descubierto por el fisiólogo William B. Carpenter y Chevreul). Nuestro subconsciente e intuición superior captan la sutilísima variación bioeléctrica del campo y la traducen en un movimiento visible gracias al péndulo, que actúa como un microscopio amplificador.</p>

        <h3>2. Protocolo de Calibración de tu Código Sí / No</h3>
        <ol>
          <li>Siéntate con la espalda recta y los pies apoyados en el suelo. Apoya el codo derecho sobre la mesa.</li>
          <li>Sostén la cadenita del péndulo entre las yemas del pulgar y el índice a unos 8-10 cm del cuerpo del péndulo.</li>
          <li>Respira hondo y pide con serenidad: <em>"Péndulo, muéstrame mi SÍ con total claridad"</em>. Espera 10 a 20 segundos sin forzar. Observa si describe un círculo horario, un vaivén vertical o una elipse. Anótalo.</li>
          <li>Para el péndulo con la otra mano y di: <em>"Péndulo, muéstrame mi NO con total claridad"</em>. Observa el movimiento opuesto.</li>
          <li>Para verificar que la calibración es honesta, haz preguntas neutras cuya respuesta conozcas con certeza:
            <br>• <em>"¿Me llamo [Tu nombre real]?"</em> -> Debe dar SÍ.
            <br>• <em>"¿Tengo 150 años?"</em> -> Debe dar NO.
          </li>
        </ol>

        <h3>3. Preguntas de Permiso Obligatorias en Consulta</h3>
        <p>Antes de abrir una sesión sobre cualquier persona (incluso sobre ti misma), formula estas 3 preguntas:</p>
        <ul>
          <li>1. <em>"¿Tengo permiso espiritual para realizar esta sesión a [Nombre]?"</em></li>
          <li>2. <em>"¿Es este el momento idóneo para su mayor bienestar?"</em></li>
          <li>3. <em>"¿Se encuentra mi propia energía en condiciones óptimas para sostener esta sesión?"</em></li>
        </ul>
        <p>Si alguna respuesta es NO, espera unas horas o reprograma la sesión. Forzar un tratamiento en un momento inoportuno genera resistencia en el campo del consultante.</p>
      `
    },
    {
      number: 6,
      title: "Patología Energética Profunda: Miasmas, Magias y Geopatías",
      tag: "Diagnóstico Clínico",
      duration: "25 min lectura",
      summary: "Los 4 miasmas hahnemannianos, larvas astrales vertebrales, Verde Eléctrico Negativo y conceptos de Cábala (Lashon Hará).",
      content: `
        <h3>1. La Doctrina de los Miasmas (Hahnemann y la Radiestesia)</h3>
        <p>El creador de la homeopatía, Samuel Hahnemann, descubrió que detrás de cualquier síntoma agudo existe una raíz miasmática latente (una predisposición genética o heredada). En el péndulo hebreo distinguimos con nitidez:</p>
        <ul>
          <li><strong>Miasma Psórico:</strong> Es el miasma de la hipofunción, el miedo existencial y la falta de energía. Provoca alergias cutáneas, cansancio crónico, debilidad muscular, timidez paralizante y fobia a la escasez económica.</li>
          <li><strong>Miasma Sicótico:</strong> Es el miasma del exceso, la acumulación y el estancamiento. Provoca celulitis, quistes, pólipos, verrugas, inflamaciones crónicas, celos posesivos, verborrea y rigidez en las opiniones.</li>
          <li><strong>Miasma Luético (Destructivo):</strong> Es el miasma de la ulceración y la degeneración. Provoca necrosis, pérdida de masa ósea, autoinmunidad severa, depresión maníaca, ira descontrolada y adicciones destructivas.</li>
          <li><strong>Miasma Tuberculínico:</strong> Alternancia abrupta entre euforia e hiperactividad y colapso respiratorio o melancolía.</li>
        </ul>

        <h3>2. Larvas Astrales y Parásitos Energéticos</h3>
        <p>Las larvas son entidades sin alma creadas por la condensación de emociones densas humanas (formas-pensamiento de rabia, miedo extremo, pornografía compulsiva o alcoholismo). Se adhieren al aura como rémoras en un tiburón y drenan el prana:</p>
        <ul>
          <li><strong>Puntos de fijación habituales:</strong> Vértebra C1 (Atlas), vértebra D4 (detrás del corazón) y vértebra L5 (zona lumbar).</li>
          <li><strong>Síntomas:</strong> Dolor constante en los hombros como si llevaras una mochila de piedras, cambios bruscos de humor hacia la hostilidad y cansancio permanente.</li>
        </ul>

        <h3>3. El Verde Eléctrico Negativo (V-) y las Geopatías</h3>
        <p>El espectro del Verde Negativo es una emisión electromagnética de longitud de onda extremadamente corta que deshidrata el cuerpo etérico. Proviene de:</p>
        <ul>
          <li>Corrientes de agua subterráneas que friccionan bajo el suelo de la casa.</li>
          <li>Cruces de líneas telúricas Hartmann o Curry.</li>
          <li>Aparatos electrónicos potentes, routers y cargadores de móvil enchufados junto a la cabecera de la cama.</li>
        </ul>

        <h3>4. Concepto Cabalístico: *Lashon Hará* vs. *Lashon HaTov*</h3>
        <p>En la sabiduría de la Cábala, la palabra humana crea universos o los destruye. <em>Lashon Hará</em> (la lengua que murmura, critica y juzga) genera inmediatamente una fisura en el 5º y 4º chakra del que habla, desvitalizando su propio aura. Por el contrario, practicar <em>Lashon HaTov</em> (bendecir, buscar lo bueno en los demás y hablar con serenidad) eleva la frecuencia del aura a niveles de protección invulnerable.</p>
      `
    },
    {
      number: 7,
      title: "Preparación del Terapeuta, Conexión Espiritual y Buenas Prácticas",
      tag: "Práctica Clínica",
      duration: "20 min lectura",
      summary: "Sintonización con los Guías Espirituales, mantenimiento del péndulo de madera, contraindicaciones y detox tras la sesión.",
      content: `
        <h3>1. La Sintonización con tus Guías Espirituales</h3>
        <p>Antes de comenzar, dedica dos minutos a encender una vela blanca natural o un quemador de aceites esenciales (incienso, mirra o lavanda). Siéntate con las manos sobre el corazón e invoca la presencia de los seres de luz que te acompañan:</p>
        <div class="quote-box">
          <em>"Pido la asistencia de los Ángeles de la Sanación, del Arcángel Rafael y de mis Guías Espirituales. Que mis manos sean instrumento de alivio, que mis palabras aporten paz y que solo la luz más pura opere a través de mí. Amén."</em>
        </div>

        <h3>2. Cuidado, Limpieza y Descarga del Péndulo de Madera</h3>
        <p>El péndulo de haya es un receptor sensible. Sigue estas tres reglas de mantenimiento:</p>
        <ul>
          <li><strong>Nunca lo mojes bajo el grifo:</strong> El agua hincha la madera, descalibra el centro de gravedad del cilindro y oxida el cordón de algodón.</li>
          <li><strong>Descarga rápida entre sesiones:</strong> Da tres golpes secos y firmes con la base del péndulo sobre una superficie de madera maciza (la pata de una mesa o una tabla de madera). El choque acústico disipa la vibración residual.</li>
          <li><strong>Limpieza por humo (*Sahumerio*):</strong> Una vez a la semana, pasa el péndulo lentamente por el humo de un atado de salvia blanca, ruda o palo santo.</li>
        </ul>

        <h3>3. Contraindicaciones Estrictas: ¿Cuándo NO aplicar Péndulo Hebreo?</h3>
        <ul>
          <li><strong>Primer trimestre de embarazo:</strong> El feto está implantando su red etérica; cualquier manipulación intensa en chakras 1 y 2 puede perturbar la gestación. Solo se permiten etiquetas de bendición suave en el corazón.</li>
          <li><strong>Falta de autorización de la persona:</strong> Respeto sagrado al Libre Albedrío.</li>
          <li><strong>Personas en medio de un brote psicótico activo:</strong> El movimiento del péndulo puede generar descompensación mental. Primero debe estabilizarse con la psiquiatría convencional.</li>
          <li><strong>El propio terapeuta enfermo:</strong> Si tienes fiebre, gripe o agotamiento extremo, tu propio biocampo carece de voltaje suficiente para sostener una sesión.</li>
        </ul>
      `
    },
    {
      number: 8,
      title: "Los Códigos de Cristina Vicente y Tiempos de Integración",
      tag: "Códigos Especiales",
      duration: "18 min lectura",
      summary: "Código Liberador, Código Pacificador, el testeo exacto de los días de integración y seguimiento clínico.",
      content: `
        <h3>1. Los Códigos Canalizados de Resonancia Rápida</h3>
        <p>Dentro de la metodología de la Escuela Internacional de Péndulo Hebreo, Cristina Vicente desarrolló códigos vibracionales canalizados específicos diseñados para acelerar la resolución de bloqueos complejos:</p>
        <ul>
          <li><strong>Código Liberador (שחרור - Shijrur):</strong> Actúa como un disolvente cuántico sobre nudos de dolor acumulado, ataduras a exparejas que ya no están en nuestra vida pero siguen drenando energía, y contratos inconscientes de culpa.</li>
          <li><strong>Código Pacificador (שלום - Shalom):</strong> Ralentiza la frecuencia de las ondas cerebrales pasando de ondas Beta agitadas (estrés, 14-30 Hz) a ondas Alfa y Theta profundas (7-12 Hz). Induce calma sedativa sin efectos secundarios químicos.</li>
        </ul>

        <h3>2. Cómo Testar los Días y Horas de Integración</h3>
        <p>El campo energético requiere un periodo de reajuste biológico tras una sesión. Al terminar el sellado, toma tu péndulo auxiliar y formula:</p>
        <ol>
          <li><em>"¿Cuántos días necesita el campo de [Nombre] para integrar completamente esta sanación?"</em></li>
          <li>Pregunta correlativamente: <em>"¿1 día?... ¿2 días?... ¿3 días?... ¿7 días?... ¿15 días?"</em></li>
          <li>En el número donde el péndulo dé un SÍ rotundo, anótalo en la ficha del consultante. <strong>Durante ese periodo no se debe repetir una sesión completa</strong>; el cuerpo sutil está reorganizando su arquitectura celular y perturbarlo con más estímulos sería contraproducente.</li>
        </ol>
      `
    },
    {
      number: 9,
      title: "Tu Primera Práctica Personal: El Protocolo 'Cuida tu Energía'",
      tag: "Autotratamiento",
      duration: "20 min lectura y práctica",
      summary: "Iniciación de 3 días para calibrar tu propio canal energético antes de atender a terceros.",
      content: `
        <h3>El Reto de Iniciación de 3 Días</h3>
        <p>No se puede dar de beber a nadie con un cántaro vacío. Antes de pensar en ayudar a tus hijos, a tu pareja o a futuros pacientes, experimenta el poder de la herramienta en tu propia carne:</p>
        
        <h4>Día 1: Desintoxicación y Apertura</h4>
        <ul>
          <li>Enciende una vela y haz 3 respiraciones profundas dentro de tu Burbuja Azul.</li>
          <li>Coloca la etiqueta <strong>Campo Electromagnético</strong> (cara ranurada) y haz 3 pasadas lentas de la cabeza a los pies en sentido horario.</li>
          <li>Coloca la etiqueta <strong>Limpiar Cuerpo y Lugar</strong> (cara ranurada) y gira en sentido antihorario durante 2 minutos sobre tu pecho y tu estómago, visualizando cómo se desprenden las tensiones del día.</li>
          <li>Sella tu aura con <strong>Dorado Áurico</strong> y finaliza con <strong>Cerrar Proceso</strong>. Bebe un vaso grande de agua mineral.</li>
        </ul>

        <h4>Día 2: Pacificación y Descanso Mental</h4>
        <ul>
          <li>Abre el campo con <strong>Campo Electromagnético</strong>.</li>
          <li>Coloca la etiqueta <strong>Paz (Shalom)</strong> con la cara ranurada hacia abajo. Hazla girar en sentido horario sobre tu corazón durante 2 minutos y luego sobre tu frente (entrecejo) durante 2 minutos más. Siente cómo se afloja la mandíbula y se disuelve el ceño fruncido.</li>
          <li>Sella con <strong>Dorado Áurico</strong> y cierra el proceso. Duerme esa noche sin pantallas cerca.</li>
        </ul>

        <h4>Día 3: Recarga de Frecuencia y Conexión de Luz</h4>
        <ul>
          <li>Abre el campo con <strong>Campo Electromagnético</strong>.</li>
          <li>Coloca la etiqueta <strong>Luz Divina (Or Elohi)</strong> con la cara ranurada. Hazla girar sobre tu coronilla en sentido horario visualizando un pilar de luz blanca y dorada que entra por tu cabeza y desciende por toda tu columna vertebral hasta iluminar cada célula.</li>
          <li>Irradia en tu corazón <strong>Amor Incondicional</strong> y sella con <strong>Dorado Áurico</strong> y <strong>Cerrar Proceso</strong>.</li>
        </ul>
      `
    },
    {
      number: 10,
      title: "Niveles Energéticos y Frecuencia Vibracional en Escala Bovis",
      tag: "Medición Cuántica",
      duration: "18 min lectura",
      summary: "La escala de Antoine Bovis, cómo calibrar tu sensibilidad radiestésica y elevar el voltaje vital.",
      content: `
        <h3>1. La Medición Científica de la Vitalidad: Antoine Bovis</h3>
        <p>El investigador francés Antoine Bovis y el ingeniero Simoneton establecieron una escala radiestésica universal para medir la longitud de onda de los seres vivos y alimentos en <strong>Unidades Bovis (UB)</strong> (relacionadas con el Angstrom etérico):</p>
        <ul>
          <li><strong>0 a 3.000 UB:</strong> Zona crítica de enfermedad degenerativa, cáncer o infestación parasitaria severa.</li>
          <li><strong>3.000 a 6.000 UB:</strong> Estado de desvitalización, anemia, depresión crónica, dolor o convalecencia.</li>
          <li><strong>6.500 UB:</strong> El <strong>umbral neutro exacto</strong> de la salud física en un ser humano adulto equilibrado.</li>
          <li><strong>7.000 a 10.000 UB:</strong> Excelente salud física, sistema inmune fuerte, vitalidad y buen humor.</li>
          <li><strong>10.000 a 14.000 UB:</strong> Nivel de vibración emocional y mental elevado (amor incondicional, creatividad, compasión).</li>
          <li><strong>14.000 a 20.000+ UB:</strong> Nivel espiritual sagrado alcanzado en lugares de poder, templos antiguos o personas en estados profundos de meditación y oración.</li>
        </ul>

        <h3>2. Cómo Medir en el Biómetro Interactivo</h3>
        <p>Utiliza la pestaña <strong>Biómetro de Bovis</strong> de esta misma web o imprime la lámina incluida en la carpeta. Sostén el péndulo auxiliar sobre el punto cero central y pregunta: <em>"¿Cuál es el nivel vibracional actual en Unidades Bovis de [Nombre / Espacio]?"</em>. El péndulo oscilará marcando con nitidez el arco correspondiente.</p>
      `
    },
    {
      number: 11,
      title: "Conceptos Prácticos Previos y Evitación de Transferencias",
      tag: "Seguridad y Técnica",
      duration: "15 min lectura",
      summary: "Cómo acceder al campo electromagnético con reverencia, evitar la fatiga empática y ejercicios de corte.",
      content: `
        <h3>1. La Reverencia al Entrar en el Espacio Sagrado</h3>
        <p>El aura de una persona es el templo de su alma. Nunca te acerques al consultante de forma brusca, distraída o hablando de temas mundanos. Mantén una actitud de profunda presencia:</p>
        <ul>
          <li>Pregunta verbalmente al consultante: <em>"¿Estás preparado/a para comenzar?"</em>.</li>
          <li>Toma una respiración lenta y compasiva.</li>
          <li>Comienza siempre el barrido a una distancia prudente (unos 30-40 cm) para que su sistema nervioso no perciba una invasión territorial.</li>
        </ul>

        <h3>2. El Síndrome de Fatiga Empática y Transferencia Negativa</h3>
        <p>Muchos terapeutas novatos terminan el día con dolor de cabeza, pesadez en el estómago o con los mismos síntomas que tenían sus pacientes. Esto ocurre por dos errores clásicos:</p>
        <ol>
          <li><strong>Involucrarse desde la lástima en vez de la compasión:</strong> Sentir lástima por el consultante baja tu propia frecuencia y abre tu plexo solar para absorber su dolor. La compasión, en cambio, se sitúa en el 4º chakra (corazón) y sostiene la luz sin mezclarse con la sombra.</li>
          <li><strong>Olvidar cerrar el proceso o lavarse las manos:</strong> El ritual de cierre y el agua fría cortan la resonancia mórfica entre ambos campos.</li>
        </ol>
      `
    },
    {
      number: 12,
      title: "Autotratamiento: El Método Maestro ABC Paso a Paso",
      tag: "Autotratamiento",
      duration: "25 min lectura y protocolo",
      summary: "Guía completa para auto-sanarte tumbada en la cama o sentada con la plantilla anatómica.",
      content: `
        <h3>El Protocolo ABC de la Autosanación</h3>
        <p>El autotratamiento es la práctica más gratificante del Péndulo Hebreo. Tienes dos maneras de realizarlo:</p>
        <ul>
          <li><strong>Opción A (Sobre tu propio cuerpo):</strong> Tumbada en la cama con una almohada cómoda o sentada en un sillón. Sostén el péndulo a unos 15 cm de tu pecho y abdomen.</li>
          <li><strong>Opción B (Sobre la lámina anatómica testigo):</strong> Coloca una foto tuya o escribe tu nombre completo y fecha de nacimiento en el recuadro de la plantilla de trabajo. Aplica el péndulo sobre el papel; por resonancia cuántica, el efecto en tu cuerpo será exactamente idéntico.</li>
        </ul>

        <h4>Secuencia de Ejecución:</h4>
        <ol>
          <li><strong>A (Apertura):</strong> Etiqueta <em>Campo Electromagnético</em>, cara ranurada, 3 giros horarios de pies a cabeza.</li>
          <li><strong>B (Búsqueda y Testeo):</strong> Etiqueta <em>Miasma</em> o <em>Larvas Astrales</em>, cara lisa hacia abajo. Testea tus 7 chakras. Anota dónde gira en sentido antihorario.</li>
          <li><strong>C (Corte y Limpieza):</strong> En los chakras donde dio giro antihorario, aplica <em>Limpiar Cuerpo y Lugar</em> o <em>Disolver</em> con la cara ranurada girando a la izquierda durante 2 minutos.</li>
          <li><strong>D (Dotación de Luz):</strong> Selecciona la virtud que necesitas (ej. <em>Paz</em> para el estrés, <em>Sanación Completa</em> para un dolor, <em>Abundancia</em> para el dinero) con cara ranurada girando a la derecha hasta que se pare solo.</li>
          <li><strong>E (Envoltura y Cierre):</strong> Sella con <em>Dorado Áurico</em> en giro horario y finaliza con <em>Cerrar Proceso</em>.</li>
        </ol>
      `
    },
    {
      number: 13,
      title: "Protocolopedia: Compendio de Protocolos Cotidianos",
      tag: "Protocolos",
      duration: "22 min lectura",
      summary: "El Misil de Luz, protocolo para el insomnio pertinaz, dolor articular y cefaleas agudas.",
      content: `
        <h3>Tu Botiquín Vibracional para el Día a Día</h3>
        <p>No siempre se dispone de 45 minutos para una sesión completa. La Protocolopedia recoge recetas de urgencia de 5 a 10 minutos:</p>

        <h4>1. El Protocolo 'Misil de Luz' (Dolores Agudos y Contracturas)</h4>
        <p>Para lumbalgias repentinas, tortícolis o dolor de estómago punzante:</p>
        <ol>
          <li>Abre campo con <em>Campo Electromagnético</em> (1 pasada rápida).</li>
          <li>Coloca la etiqueta <strong>Disolver (Lefazer)</strong> con cara ranurada girando en sentido antihorario directamente sobre el punto de dolor durante 90 segundos.</li>
          <li>Coloca la etiqueta <strong>טיל אור (Misil de Luz)</strong> con cara ranurada hacia abajo. Gira en sentido horario vigorosamente sobre el foco de dolor visualizando un rayo láser de luz dorada penetrando en el tejido.</li>
          <li>Sella con <em>Dorado Áurico</em>.</li>
        </ol>

        <h4>2. El Protocolo 'Mente Serena' (Insomnio y Rumiación)</h4>
        <ol>
          <li>Coloca la etiqueta <strong>Disolver</strong> en la frente (entrecejo) girando 1 minuto a la izquierda para desenredar los pensamientos fijos del trabajo.</li>
          <li>Coloca la etiqueta <strong>Paz (Shalom)</strong> con cara ranurada y gira a la derecha 2 minutos en la frente y 2 minutos en el corazón.</li>
          <li>Sella con <em>Dorado Áurico</em>. El sistema nervioso entrará en estado parasimpático y conciliarás el sueño con rapidez.</li>
        </ol>
      `
    },
    {
      number: 14,
      title: "Focos Energéticos: Localización y Extracción de Parásitos Astrales",
      tag: "Limpieza Avanzada",
      duration: "20 min lectura",
      summary: "Diagnóstico dorsal, desenganche de larvas en la columna y desinfección áurica profunda.",
      content: `
        <h3>1. Dónde Anidan los Parásitos Astrales</h3>
        <p>Las larvas energéticas no flotan al azar; buscan zonas corporales con bajo voltaje bioeléctrico y calor congestivo:</p>
        <ul>
          <li><strong>La Nuca (Bulbo Raquídeo / Puerta de Jade):</strong> Provoca pesadez cervical, pensamientos derrotistas y sensación de niebla en la cabeza.</li>
          <li><strong>La Zona Dorsal (D4 / Detrás del corazón):</strong> Provoca opresión en el pecho, sensación de que te clavan un puñal en la espalda y tristeza sin motivo.</li>
          <li><strong>La Zona Lumbar y Sacra (L4-L5):</strong> Provoca agotamiento físico lumbar, apatía sexual o adicciones sexuales compulsivas.</li>
        </ul>

        <h3>2. Protocolo de Extracción Definitiva</h3>
        <ol>
          <li>Pide a la persona que se coloque boca abajo en la camilla (o utiliza el dibujo dorsal de la plantilla).</li>
          <li>Testea con la cara LISA y la etiqueta <strong>טפילי הילה (Tefilei Hilah - Larvas Astrales)</strong> recorriendo la columna de abajo a arriba.</li>
          <li>Donde el péndulo gire en sentido antihorario, marca el foco.</li>
          <li>Cambia a la etiqueta <strong>Limpiar Cuerpo y Lugar</strong> (cara ranurada) y gira en sentido antihorario durante 2 minutos visualizando un fuego violeta consumidor que desintegra los tentáculos del parásito.</li>
          <li>Irradia inmediatamente <strong>Luz Divina (Or Elohi)</strong> con giro horario para cauterizar el orificio etérico que dejó el parásito.</li>
          <li>Sella el hueco con <strong>Dorado Áurico</strong>.</li>
        </ol>
      `
    },
    {
      number: 15,
      title: "Ética, Libre Albedrío y Confección de la Ficha del Consultante",
      tag: "Ética Profesional",
      duration: "18 min lectura",
      summary: "El consentimiento informado, cómo comunicar diagnósticos sin generar miedo y el modelo de ficha clínica.",
      content: `
        <h3>1. La Psicología de la Comunicación Terapéutica</h3>
        <p>Una palabra imprudente del terapeuta puede hacer más daño que el propio miasma. La sugestión negativa (efecto nocebo) enferma:</p>
        <ul>
          <li><strong>Prohibido decir:</strong> "Tienes una magia negra horrorosa de tu suegra", "Tienes un miasma de cáncer" o "Tu aura está podrida". Eso es irresponsable, falto de ética y destructivo.</li>
          <li><strong>Forma correcta de comunicar:</strong> "He detectado una congestión densa en la zona digestiva vinculada a estrés acumulado. La hemos limpiado por completo y ahora está recibiendo una frecuencia de luz y regeneración". La persona debe irse de la consulta empoderada, aliviada y en paz.</li>
        </ul>

        <h3>2. La Ficha del Consultante</h3>
        <p>Lleva siempre un registro ordenado (en papel o digital) con los datos del consultante: motivo de consulta, nivel Bovis inicial vs. final, chakras tratados, miasmas detectados, etiquetas irradiadas y días de integración aconsejados. Encontrarás la ficha oficial lista para imprimir en la pestaña <em>Plantillas</em> de esta web.</p>
      `
    },
    {
      number: 16,
      title: "Sesiones a Distancia: La Mecánica Cuántica del Testigo",
      tag: "Terapia a Distancia",
      duration: "22 min lectura",
      summary: "Entrelazamiento cuántico, preparación del testigo biológico o gráfico y sesión paso a paso a miles de kilómetros.",
      content: `
        <h3>1. Por qué la Distancia No Existe en el Campo Cuántico</h3>
        <p>En el año 2022, el Premio Nobel de Física fue otorgado a Alain Aspect, John Clauser y Anton Zeilinger por demostrar experimentalmente el <strong>entrelazamiento cuántico</strong>: dos partículas que han estado en contacto permanecen unidas de tal manera que lo que le sucede a una afecta de forma instantánea a la otra, sin importar si están a 1 metro o al otro lado de la galaxia.</p>
        <p>Cuando utilizas un testigo (una foto de la persona, o su nombre completo con fecha de nacimiento escrito a mano), estableces un puente de entrelazamiento cuántico instantáneo con su campo holográfico.</p>

        <h3>2. Protocolo para una Sesión a Distancia Impecable</h3>
        <ol>
          <li>Acuerda una hora fija con el consultante. Pídele que durante los 45 minutos de la sesión esté en su casa descansando, tumbado o sentado, con el teléfono silenciado y música suave.</li>
          <li>Coloca su fotografía reciente sobre la <strong>Plantilla Anatómica</strong> de trabajo.</li>
          <li>Pon tu mano izquierda sobre el testigo y con la derecha gira el péndulo con la etiqueta <em>Campo Electromagnético</em> decretando: <em>"Sintonizo con el biocampo holográfico de [Nombre y apellidos]"</em>.</li>
          <li>Realiza la sesión completa de diagnóstico, limpieza e irradiación exactamente igual que si estuviera físicamente en tu camilla.</li>
          <li>Al terminar, sella el testigo con <em>Dorado Áurico</em>, retira la fotografía, lávate las manos y envía a tu consultante una nota o audio con las observaciones y consejos de hidratación.</li>
        </ol>
      `
    },
    {
      number: 17,
      title: "Aplicación Presencial en Camilla: El Ritual Completo",
      tag: "Clínica Presencial",
      duration: "25 min lectura y protocolo",
      summary: "Disposición de la sala, postura corporal ergonómica del terapeuta, colocación del consultante y protocolo cronometrado.",
      content: `
        <h3>1. Ambientación de la Sala de Consulta</h3>
        <ul>
          <li><strong>Temperatura:</strong> Al relajarse y limpiar el aura, la temperatura corporal del consultante desciende entre 1 y 2 grados. Ten siempre a mano una manta suave de algodón o lana para arroparlo.</li>
          <li><strong>Música y Sonido:</strong> Utiliza frecuencias puras (432 Hz de afinación natural o 528 Hz de regeneración del ADN) a volumen muy suave.</li>
          <li><strong>Sin metales:</strong> Pide al consultante que se retire reloj, anillos grandes, gafas y cinturón con hebilla metálica.</li>
        </ul>

        <h3>2. Cronograma de una Sesión Profesional de 60 Minutos</h3>
        <ul>
          <li><strong>Minutos 0 a 10:</strong> Acogida, entrevista breve y toma de constantes energéticas con el biómetro Bovis.</li>
          <li><strong>Minutos 10 a 15:</strong> Preparación, protección del terapeuta y Apertura con <em>Campo Electromagnético</em>.</li>
          <li><strong>Minutos 15 a 25:</strong> Diagnóstico de miasmas y densidades en las 7 capas del aura chakra por chakra.</li>
          <li><strong>Minutos 25 a 40:</strong> Limpieza y desgravado de los puntos bloqueados con <em>Limpiar Cuerpo y Lugar</em> o muérdago.</li>
          <li><strong>Minutos 40 a 50:</strong> Irradiación de virtudes, frecuencias de luz y recarga de chakras.</li>
          <li><strong>Minutos 50 a 55:</strong> Sellado áurico con <em>Dorado Áurico</em> y Cierre de proceso.</li>
          <li><strong>Minutos 55 a 60:</strong> Incorporación suave del consultante, vaso de agua mineral y recomendaciones.</li>
        </ul>
      `
    },
    {
      number: 18,
      title: "Protocolo Clínico Especial: 'Salir de la Tristeza y el Duelo'",
      tag: "Protocolos Específicos",
      duration: "20 min lectura",
      summary: "Abordaje del dolor por separación, duelo por fallecimiento o depresión reactiva.",
      content: `
        <h3>La Anatomía Energética del Corazón Roto</h3>
        <p>Cuando una persona experimenta una pérdida profunda (muerte de un ser querido, divorcio o despido humillante), el 4º chakra (corazón) y el 3º chakra (plexo solar) colapsan hacia adentro. Se forma una coraza densa de dolor que impide respirar con plenitud y genera sensación de vacío físico en el pecho.</p>

        <h4>Protocolo de Rescate:</h4>
        <ol>
          <li>Abre campo con <em>Campo Electromagnético</em>.</li>
          <li>Testea miasmas en el 4º y 3º chakra con cara lisa.</li>
          <li>Aplica la etiqueta <strong>שחרור (Liberación Emocional)</strong> con cara ranurada girando en sentido antihorario sobre el pecho durante 3 minutos. Pide a la persona que suelte el aire con un largo suspiro.</li>
          <li>Aplica la etiqueta <strong>לנתק (Cortar Lazos Tóxicos)</strong> si hay un enganche de apego doloroso con la persona ausente, decretando: <em>"Corto el sufrimiento, la culpa y el apego. Conservo solo el amor en paz"</em>.</li>
          <li>Irradia en sentido horario con cara ranurada:
            <br>• <strong>Amor Incondicional (Ahava Lelo Tnai)</strong> en el centro del pecho durante 3 minutos.
            <br>• <strong>Alegría de Vivir (Simjá)</strong> en el plexo solar durante 2 minutos.
            <br>• <strong>Paz (Shalom)</strong> en el entrecejo y corazón.
          </li>
          <li>Sella con <em>Dorado Áurico</em> y <em>Cerrar Proceso</em>. Repetir a los 7 días.</li>
        </ol>
      `
    },
    {
      number: 19,
      title: "El Arte de Crear Protocolos Personalizados a Medida",
      tag: "Maestría Terapéutica",
      duration: "20 min lectura",
      summary: "Cómo testar exactamente qué virtudes y etiquetas necesita cada persona particular sin aplicar recetas genéricas.",
      content: `
        <h3>La Terapia a Medida: Salir del 'Piloto Automático'</h3>
        <p>El terapeuta mediocre aplica siempre las mismas tres etiquetas a todo el mundo. El terapeuta maestro personaliza la receta vibracional con precisión quirúrgica:</p>
        <ol>
          <li>Despliega sobre tu mesa de trabajo todas las etiquetas de Irradiación (Paz, Amor, Sanación, Fortaleza, Alegría, Confianza, Abundancia, Sabiduría, Unidad, etc.).</li>
          <li>Toma tu péndulo auxiliar y pregúntale: <em>"¿Cuál es la primera etiqueta prioritaria que el alma de [Nombre] necesita recibir hoy?"</em>.</li>
          <li>Pasa el péndulo sobre la fila de etiquetas hasta que dé un giro afirmativo claro en una de ellas.</li>
          <li>Pregunta: <em>"¿Necesita una segunda etiqueta complementaria?"</em>. Si es SÍ, repite el proceso.</li>
          <li>Testea en qué chakra específico debe irradiarse cada una. Descubrirás combinaciones asombrosas (por ejemplo: irradiar <em>Fortaleza</em> en el 4º chakra de una persona tímida, o <em>Confianza</em> en el 2º chakra de alguien con inseguridad económica).</li>
        </ol>
      `
    },
    {
      number: 20,
      title: "Sanación del Linaje Ancestral y Trabajo con los Padres",
      tag: "Transgeneracional",
      duration: "22 min lectura",
      summary: "La figura paterna (abundancia/límites) y materna (afecto/salud), audiocartas de liberación y corte de lealtades.",
      content: `
        <h3>1. La Psicogenéalogía y los Canales del Linaje</h3>
        <p>Nadie empieza desde cero: heredamos la información biológica, emocional y energética de nuestros padres y ancestros:</p>
        <ul>
          <li><strong>La Figura Paterna (Lado Derecho del Cuerpo / Chakras 1 y 3):</strong> Rige nuestra fuerza para avanzar en la profesión, el valor de poner límites, la protección y el vínculo con el dinero y la prosperidad externa. Si estás peleada con tu padre, tu economía tenderá a trabarse.</li>
          <li><strong>La Figura Materna (Lado Izquierdo del Cuerpo / Chakras 2 y 4):</strong> Rige nuestra capacidad de nutrirnos, la salud de los órganos reproductores, la receptividad afectiva y el amor propio. Si hay conflicto no perdonado con la madre, se resiente la salud y las relaciones de pareja.</li>
        </ul>

        <h3>2. Protocolo de Reconciliación con el Linaje</h3>
        <ol>
          <li>Coloca en la plantilla la fotografía de tus padres (o escribe sus nombres completos con fechas).</li>
          <li>Abre el campo con <em>Campo Electromagnético</em>.</li>
          <li>Aplica <strong>Cortar Lazos Tóxicos (Lenatek)</strong> girando a la izquierda para cortar lealtades invisibles de sufrimiento ('como mi madre sufrió en el matrimonio, yo inconscientemente también sufro').</li>
          <li>Aplica <strong>Borrar Memoria Celular</strong> para liberar traumas de la infancia.</li>
          <li>Irradia sobre el vínculo <strong>Amor Incondicional</strong> y <strong>Paz (Shalom)</strong> con cara ranurada en sentido horario.</li>
          <li>Sella con <em>Dorado Áurico</em>. Notarás un alivio en tus hombros y espalda como si te quitaran un peso ancestral.</li>
        </ol>
      `
    },
    {
      number: 21,
      title: "Embarazo, Niños y Péndulo Hebreo: Pautas de Extrema Suavidad",
      tag: "Familia y Crianza",
      duration: "18 min lectura",
      summary: "Armonización suave durante la gestación, terrores nocturnos infantiles y niños altamente sensibles (PAS).",
      content: `
        <h3>1. Péndulo Hebreo y Gestación</h3>
        <p>Durante los 9 meses de embarazo, el aura de la madre y del bebé están completamente imbricadas. Reglas sagradas:</p>
        <ul>
          <li><strong>Prohibido testar miasmas profundos o usar muérdago sobre el abdomen.</strong></li>
          <li>Se aplican únicamente etiquetas dulces de nutrición áurica: <strong>Paz (Shalom)</strong>, <strong>Amor Incondicional</strong> y <strong>Luz Divina</strong> sobre la coronilla de la madre y sobre su corazón. El bebé absorberá esa calma a través del cordón umbilical energético.</li>
        </ul>

        <h3>2. Niños y Bebés: Seres de Alta Permeabilidad</h3>
        <p>Los niños tienen un aura sumamente limpia y abierta, sin las corazas defensivas del adulto. Por eso:</p>
        <ul>
          <li><strong>Las sesiones duran de 5 a 10 minutos como máximo.</strong> Su cuerpo etérico responde en segundos.</li>
          <li><strong>Miedos escolares y terrores nocturnos:</strong> Trabaja sobre su foto a distancia aplicando <em>Paz</em> en el entrecejo y sellando su habitación con la <em>Estrella de David</em>. Descansarán profundamente sin despertarse llorando.</li>
        </ul>
      `
    },
    {
      number: 22,
      title: "Sanación Energética de Mascotas y Animales",
      tag: "Veterinaria Holística",
      duration: "20 min lectura",
      summary: "Anatomía de los 8 chakras en perros y gatos, el chakra braquial de conexión y protocolos de calma veterinaria.",
      content: `
        <h3>1. El Sistema Chakral de los Animales</h3>
        <p>Nuestros animales de compañía poseen una estructura energética fascinante:</p>
        <ul>
          <li>Los 7 chakras principales están dispuestos <strong>en línea horizontal</strong> a lo largo de su espina dorsal.</li>
          <li>Poseen un <strong>8º Chakra Primario llamado Chakra Braquial:</strong> Ubicado a ambos lados de los hombros/omóplatos. Es el centro que conecta al animal con los seres humanos. Los perros y gatos absorben el estrés y la tristeza de sus dueños a través de este chakra para aliviar a la familia.</li>
        </ul>

        <h3>2. Cómo Tratar a un Perro o Gato</h3>
        <ol>
          <li><strong>A Distancia (La forma más cómoda):</strong> Coloca su cartilla de vacunación o una fotografía suya en la plantilla de trabajo.</li>
          <li><strong>En Directo:</strong> Colócate a unos 20-30 cm del animal mientras duerme o reposa. Nunca lo ates ni lo obligues a quedarse quieto. Si se levanta y se va, respeta su decisión; ya ha absorbido la energía que necesitaba.</li>
          <li><strong>Etiquetas predilectas para animales:</strong>
            <br>• <strong>Sanación Completa (Refuá Shlemá):</strong> En posoperatorios, displasias o problemas gástricos.
            <br>• <strong>Paz (Shalom):</strong> Para perros con fobia a los petardos, truenos o ansiedad por separación.
            <br>• <strong>Amor Incondicional:</strong> Para animales rescatados con trauma de abandono o maltrato.
          </li>
        </ol>
      `
    },
    {
      number: 23,
      title: "Péndulo Hebreo en Plantas, Huertos y Dinamización de Agua",
      tag: "Naturaleza",
      duration: "16 min lectura",
      summary: "Reestructuración molecular del agua de riego, recuperación de plantas mustias y revitalización del suelo.",
      content: `
        <h3>1. La Memoria del Agua y la Radiónica (Masaru Emoto)</h3>
        <p>Los experimentos del Dr. Masaru Emoto demostraron que el agua almacena información geométrica según las palabras y frecuencias a las que es expuesta. El agua dinamizada con letras hebreas modifica sus clústeres moleculares volviéndose altamente biodisponible para las raíces vegetales.</p>

        <h3>2. Protocolo de Dinamización de Riego</h3>
        <ol>
          <li>Llena una botella de vidrio o regadera con agua limpia.</li>
          <li>Coloca en el péndulo la etiqueta <strong>Luz Divina (Or Elohi)</strong> o <strong>Sanación Completa</strong> (cara ranurada hacia abajo).</li>
          <li>Haz girar el péndulo sobre la boca del recipiente en sentido horario durante 2 a 3 minutos visualizando espirales de vida entrando en el líquido.</li>
          <li>Riega tus plantas o tu huerto con esta agua. Notarás cómo las hojas recuperan turgencia, el verde se vuelve brillante y las plagas disminuyen notablemente.</li>
        </ol>
      `
    },
    {
      number: 24,
      title: "Limpieza y Armonización de Hogares, Comercios y Espacios",
      tag: "Geobiología",
      duration: "25 min lectura y técnica",
      summary: "Memoria de las paredes, neutralización de geopatías sobre plano, limpieza presencial y consagración de prosperidad.",
      content: `
        <h3>1. Las Paredes Tienen Memoria</h3>
        <p>Los materiales de construcción (yeso, ladrillo, hormigón, madera) absorben como esponjas las ondas electromagnéticas emitidas por las emociones de quienes los habitan. Discusiones de pareja continuas, muertes dolorosas, quiebras de negocios o visitas cargadas de envidia dejan un residuo denso que provoca que una casa se sienta 'pesada', fría o conflictiva.</p>

        <h3>2. Protocolo Maestro de Limpieza sobre Plano</h3>
        <ol>
          <li>Dibuja un croquis a mano alzada de la vivienda o local comercial en un folio blanco (distribución de habitaciones, salón, cocina, baños y puerta de entrada).</li>
          <li>Abre el proceso con <strong>Campo Electromagnético</strong> sobre el papel.</li>
          <li>Con la cara LISA hacia abajo, recorre habitación por habitación con la etiqueta <strong>Verde Eléctrico Negativo (V-)</strong> o <strong>Larvas Astrales</strong>. Donde el péndulo gire a la izquierda, marca esa habitación.</li>
          <li>Cambia a la etiqueta <strong>Limpiar Cuerpo y Lugar</strong> (cara ranurada) y gira en sentido antihorario sobre cada estancia marcada durante 2 minutos.</li>
          <li>Coloca la etiqueta <strong>Paz (Shalom)</strong> y gira en sentido horario por todo el plano.</li>
          <li>Coloca la etiqueta <strong>Abundancia (Shefa)</strong> y gira en sentido horario especialmente en la puerta de entrada y en la cocina (centros de prosperidad del hogar).</li>
          <li>Consagra el centro de la casa con la <strong>Estrella de David (Maguén David)</strong> y finaliza con <em>Cerrar Proceso</em>.</li>
        </ol>
      `
    },
    {
      number: 25,
      title: "Emprendimiento Ético: Cómo Construir tu Consulta Profesional",
      tag: "Profesional",
      duration: "22 min lectura",
      summary: "Estructuración de tarifas justas, confección de consentimientos, atracción de clientes sin vender humo y fidelización.",
      content: `
        <h3>1. Rompiendo el Voto de Pobreza del Sanador</h3>
        <p>Muchos terapeutas arrastran la creencia limitante de que 'si cobro por sanar, estoy actuando mal'. En el universo rige la ley sagrada del intercambio justo: el dinero es energía de agradecimiento materializado. Cuando cobras una tarifa digna por tu tiempo y dedicación, el consultante valora el proceso y se compromete activamente con su propia curación.</p>
        <ul>
          <li><strong>Tarifas habituales:</strong> Una sesión completa de 60 minutos suele situarse entre 45 € y 75 € (o paquetes de 3 sesiones con descuento).</li>
          <li><strong>El intercambio energético:</strong> Si atiendes a una amiga íntima o familiar cercano y no quieres cobrarle en dinero, pídeles un intercambio real (una cesta de fruta, un libro, un favor práctico). Nunca dejes la sesión en 'deuda energética cero'.</li>
        </ul>

        <h3>2. Cómo Atraer tus Primeros Consultantes Éticamente</h3>
        <ol>
          <li>Empieza regalando 3 sesiones completas a personas de máxima confianza con la única condición de que, si experimentan mejoría real, te redacten un testimonio sincero de 3 párrafos.</li>
          <li>Comparte esos testimonios (anónimos) en tus redes sociales o estados de WhatsApp. El boca a boca en terapias energéticas es el método más rápido y sólido de crecimiento.</li>
          <li>Sé siempre honesta, humilde y transparente. Nunca prometas curaciones milagrosas ni critiques a la medicina tradicional. Tu profesionalidad y paz interior serán tu mejor tarjeta de visita.</li>
        </ol>
      `
    },
    {
      number: 26,
      title: "Bonus 1: El Karma, Votos Ocultos y Ataduras del Pasado",
      tag: "Bonus Especial",
      duration: "20 min lectura",
      summary: "Detección de votos de castidad o pobreza de vidas pasadas, corte de lazos kármicos y reprogramación del alma.",
      content: `
        <h3>1. ¿Qué es un Contrato Kármico?</h3>
        <p>En el plano del alma, las experiencias intensas de vidas anteriores o del transgeneracional quedan registradas en el cuerpo causal (7ª capa del aura). Votos solemnes como: <em>'Juro ante Dios que jamás volveré a tener dinero'</em> (voto de pobreza monástica) o <em>'Renuncio al amor humano para consagrarme al dolor'</em> permanecen activos como programas informáticos en segundo plano que boicotean nuestra vida actual.</p>

        <h3>2. Protocolo de Rescisión Kármica</h3>
        <ol>
          <li>Testea en la coronilla (7º chakra) con la etiqueta <strong>גלגול נשמות (Gilgul Neshamot - Lazos Kármicos)</strong> cara lisa. Si gira a la izquierda, hay un contrato activo.</li>
          <li>Coloca la etiqueta <strong>Cortar Lazos Tóxicos (Lenatek)</strong> con cara ranurada girando a la izquierda durante 3 minutos mientras decretas verbalmente:
            <div class="quote-box">
              <em>"En nombre de mi Divina Presencia, anulo, revoco y disuelvo todo voto de pobreza, sacrificio, castidad o deuda kármica contraído en cualquier línea del tiempo. Reclamo mi soberanía divina aquí y ahora."</em>
            </div>
          </li>
          <li>Aplica la etiqueta <strong>Borrar Memoria Celular</strong> girando a la izquierda.</li>
          <li>Irradia <strong>Luz Divina</strong> y <strong>Abundancia (Shefa)</strong> en sentido horario.</li>
          <li>Sella con <em>Dorado Áurico</em>.</li>
        </ol>
      `
    },
    {
      number: 27,
      title: "Bonus 2: Meditación y Liberación Definitiva de la Culpa",
      tag: "Bonus Especial",
      duration: "18 min lectura y meditación",
      summary: "La frecuencia de la culpa según el mapa de Hawkins, protocolo de auto-perdón y sanación del timo.",
      content: `
        <h3>1. La Culpa: El Mayor Veneno del Biocampo</h3>
        <p>En las investigaciones sobre niveles de conciencia del Dr. David R. Hawkins, la culpa vibra a unos paupérrimos <strong>30 Hz</strong> (solo por encima de la vergüenza, que vibra a 20 Hz). Una persona atrapada en la culpa se autosabotea constantemente, atrae relaciones tóxicas como castigo inconsciente y deprime su sistema inmunológico.</p>

        <h3>2. Meditación de Autoperdón con Péndulo Hebreo</h3>
        <ol>
          <li>Abre tu campo con <em>Campo Electromagnético</em>.</li>
          <li>Coloca la etiqueta <strong>Amor Incondicional (Ahava Lelo Tnai)</strong> con cara ranurada hacia abajo.</li>
          <li>Hazla girar lentamente en sentido horario sobre tu pecho (chakra corazón y timo).</li>
          <li>Cierra los ojos, respira hondo y repite sintiendo cada palabra en tu pecho:
            <div class="quote-box">
              <em>"Hice lo mejor que supe con la madurez y la conciencia que tenía en aquel momento. Hoy comprendo que los errores fueron lecciones para mi despertar. Me libero del juicio ajeno y de mi propio látigo interior. Me perdono incondicionalmente, me abrazo y me permito ser feliz. Estoy en paz."</em>
            </div>
          </li>
          <li>Deja que el péndulo gire hasta detenerse por completo. Sella con <em>Dorado Áurico</em>.</li>
        </ol>
      `
    },
    {
      number: 28,
      title: "Bonus 3: Somatización y Memoria Emocional de los Órganos",
      tag: "Bonus Especial",
      duration: "25 min lectura",
      summary: "Medicina Tradicional China y microbiología sutil: mapa exacto de correspondencia órgano-emoción.",
      content: `
        <h3>1. La Biología de las Emociones: Cada Órgano Llora lo que la Boca Calla</h3>
        <p>La somatización no es una metáfora poética: las neuropéptidos y hormonas segregadas por cada estado emocional se adhieren a los receptores celulares de órganos específicos:</p>
        <table class="simple-table">
          <thead>
            <tr><th>Órgano Físico</th><th>Emoción Bloqueada</th><th>Síntomas Frecuentes</th><th>Etiqueta Recomendada</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Hígado y Vesícula</strong></td><td>Ira reprimida, rencor, amargura, sensación de injusticia.</td><td>Migrañas laterales, dolor bajo las costillas derechas, insomnio de 1 a 3 AM.</td><td><em>Paz</em> + <em>Amor Incondicional</em></td></tr>
            <tr><td><strong>Riñones y Vejiga</strong></td><td>Miedo profundo, inseguridad vital, pánico al futuro.</td><td>Dolor lumbar crónico, cistitis recurrentes, frío en los pies.</td><td><em>Fortaleza</em> + <em>Confianza</em></td></tr>
            <tr><td><strong>Pulmones e Intestino Grueso</strong></td><td>Tristeza no llorada, duelo, melancolía, dificultad para soltar.</td><td>Bronquitis, asma, estreñimiento, piel seca.</td><td><em>Liberación Emocional</em> + <em>Alegría</em></td></tr>
            <tr><td><strong>Estómago y Bazo</strong></td><td>Preocupación obsesiva, rumiación mental, sobrecontrol.</td><td>Gastritis, acidez, hinchazón abdominal, digestiones pesadas.</td><td><em>Paz</em> + <em>Disolver</em></td></tr>
            <tr><td><strong>Corazón e Intestino Delgado</strong></td><td>Desamor, rechazo, aislamiento, falta de alegría.</td><td>Arritmias emocionales, opresión en el pecho, insomnio.</td><td><em>Amor Incondicional</em> + <em>Luz Divina</em></td></tr>
          </tbody>
        </table>

        <h3>2. Integración Terapéutica</h3>
        <p>Cuando limpies un órgano con tu péndulo hebreo, no te limites al movimiento físico: formula preguntas al consultante que le ayuden a tomar conciencia: <em>"¿Qué situación reciente te ha producido tanta rabia que no has podido digerirla?"</em>. Cuando el paciente une la mente con la energía, la sanación se consolida para siempre.</p>
      `
    }
  ],

  // 3. ASISTENTE DE PROTOCOLOS PARA EL DÍA A DÍA (AMPLIADO A 18 PROTOCOLOS CLÍNICOS)
  protocols: [
    {
      id: "estres_ansiedad",
      title: "Crisis de Ansiedad, Estrés Agudo y Taquicardias Emocionales",
      time: "12-15 min",
      description: "Para momentos en que los nervios te desbordan, sientes el pecho cerrado, taquicardia o la respiración entrecortada.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong> (Cara ranurada, 3 pasadas en sentido horario).",
        "Aplica la etiqueta <strong>Liberación Emocional (Shijrur)</strong> (Cara ranurada) girando en sentido ANTIHORARIO sobre el pecho durante 2 minutos soltando el aire por la boca.",
        "Cambia a la etiqueta <strong>Paz (Shalom)</strong> (Cara ranurada) y gira en sentido HORARIO sobre el corazón (chakra 4) y entrecejo (chakra 6) durante 3 minutos hasta sentir que baja el pulso.",
        "Irradia <strong>Confianza y Seguridad (Bitajón)</strong> en el estómago (plexo solar) durante 2 minutos.",
        "Sella con <strong>Dorado Áurico</strong> y finaliza con <strong>Cerrar Proceso</strong>."
      ]
    },
    {
      id: "insomnio",
      title: "Insomnio Pertinaz y Rumiación Mental Nocturna",
      time: "10 min",
      description: "Para apagar el ruido mental, las preocupaciones del trabajo y descansar profundamente sin desvelarte a mitad de noche.",
      steps: [
        "Abre tu campo con <strong>Campo Electromagnético</strong> (sentido horario).",
        "Aplica la etiqueta <strong>Disolver (Lefazer)</strong> sobre tu frente (entrecejo) girando 2 minutos en sentido ANTIHORARIO para disolver pensamientos repetitivos y la sobrecarga electromagnética de pantallas.",
        "Aplica la etiqueta <strong>Paz (Shalom)</strong> en el entrecejo y en el corazón girando en sentido HORARIO durante 3 minutos.",
        "Irradia <strong>Luz Divina</strong> en la coronilla 1 minuto para serenar la glándula pineal.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "cansancio_pesadez",
      title: "Agotamiento Extremo, Pesadez y Malestar tras Hospitales o Discusiones",
      time: "15 min",
      description: "Ideal tras volver de un velatorio, hospital, una reunión conflictiva o sentir que alguien te ha drenado la vitalidad.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong>.",
        "Testea con la cara LISA y la etiqueta <strong>Larvas Astrales (Tefilei Hilah)</strong> en tu espalda y nuca.",
        "Limpia a fondo con <strong>Limpiar Cuerpo y Lugar</strong> en sentido ANTIHORARIO por toda la columna vertebral y hombros durante 3 minutos.",
        "Irradia con cara ranurada en sentido HORARIO la etiqueta <strong>Fortaleza (Otzmá)</strong> en el bajo vientre y <strong>Luz Divina</strong> en la cabeza durante 2 minutos cada una.",
        "Cierra el aura blindando con <strong>Dorado Áurico</strong> y <strong>Cerrar Proceso</strong>."
      ]
    },
    {
      id: "limpiar_casa",
      title: "Limpieza Profunda de Casas, Pisos de Alquiler y Negocios",
      time: "20 min",
      description: "Para eliminar malas vibraciones de discusiones familiares, inquilinos anteriores o locales con pocas ventas.",
      steps: [
        "Dibuja en un papel el croquis sencillo de las habitaciones de la casa.",
        "Coloca el péndulo sobre el plano y abre proceso con <strong>Campo Electromagnético</strong> en sentido horario.",
        "Gira con <strong>Limpiar Cuerpo y Lugar</strong> en sentido ANTIHORARIO recorriendo cada estancia del plano (dedica especial atención al salón y dormitorios).",
        "Irradia sobre las habitaciones <strong>Paz (Shalom)</strong> y <strong>Abundancia (Shefa)</strong> en sentido HORARIO durante 3 minutos.",
        "Coloca el sello de protección <strong>Estrella de David (Maguén David)</strong> en el centro de la vivienda.",
        "Finaliza con <strong>Cerrar Proceso</strong>."
      ]
    },
    {
      id: "dinero_bloqueado",
      title: "Desbloqueo de Prosperidad, Dinero y Merecimiento",
      time: "15 min",
      description: "Para superar el miedo a la escasez, romper patrones de ruina familiar y atraer clientes o trabajo próspero.",
      steps: [
        "Abre tu campo con <strong>Campo Electromagnético</strong>.",
        "Aplica la etiqueta <strong>Cortar Lazos Tóxicos</strong> en tu 1º chakra (raíz) y 2º chakra (sacro) en sentido ANTIHORARIO para cortar lealtades inconscientes a antepasados en ruina.",
        "Aplica <strong>Borrar Memoria Celular</strong> para disolver la creencia 'no soy digna de tener dinero'.",
        "Irradia en sentido HORARIO con cara ranurada la etiqueta <strong>Abundancia (Shefa)</strong> en el plexo solar y sobre tus manos durante 3 minutos.",
        "Irradia <strong>Confianza y Seguridad (Bitajón)</strong> en el corazón.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "dolor_fisico",
      title: "Dolor Agudo Localizado, Lumbago o Contracturas Fuertes",
      time: "10 min",
      description: "Para enviar alivio directo a un hombro agarrotado, ciática, dolor lumbar o cefalea punzante.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong>.",
        "Sitúa el péndulo a 10 cm del punto exacto del dolor con la etiqueta <strong>Disolver (Lefazer)</strong> girando en sentido ANTIHORARIO durante 2 minutos.",
        "Cambia a la etiqueta de choque <strong>Misil de Luz (Til Or)</strong> o <strong>Sanación Completa</strong> (Cara ranurada) y gira enérgicamente en sentido HORARIO hacia el foco de dolor hasta que el péndulo se frene solo.",
        "Sella la zona con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "duelo_separacion",
      title: "Duelo por Separación, Divorcio o Fallecimiento de un Ser Querido",
      time: "20 min",
      description: "Para calmar la congoja, soltar el apego doloroso y encontrar consuelo en momentos de pérdida profunda.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong>.",
        "Aplica <strong>Liberación Emocional (Shijrur)</strong> en sentido ANTIHORARIO sobre el centro del pecho durante 3 minutos permitiendo que salgan las lágrimas.",
        "Aplica <strong>Cortar Lazos Tóxicos (Lenatek)</strong> para soltar la dependencia afectiva y el reproche.",
        "Irradia con cara ranurada en sentido HORARIO <strong>Amor Incondicional</strong> durante 3 minutos en el corazón y <strong>Paz (Shalom)</strong> en el entrecejo.",
        "Sella con <strong>Dorado Áurico</strong> y finaliza con <strong>Cerrar Proceso</strong>."
      ]
    },
    {
      id: "fibromialgia_fatiga",
      title: "Fibromialgia, Fatiga Crónica y Dolores Corporales Difusos",
      time: "25 min",
      description: "Para personas con dolor osteomuscular generalizado y sensación constante de cansancio biológico.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong> recorriendo todo el cuerpo 4 veces.",
        "Testea miasmas en el 1º, 3º y 4º chakra con cara lisa. Donde gire antihorario, limpia con <strong>Limpiar Cuerpo y Lugar</strong> 2 minutos.",
        "Aplica <strong>Desgravar Miasma</strong> sobre la columna en sentido antihorario.",
        "Irradia con cara ranurada <strong>Sanación Completa (Refuá Shlemá)</strong> durante 3 minutos y <strong>Fortaleza (Otzmá)</strong> en el 1º chakra.",
        "Irradia <strong>Paz (Shalom)</strong> para desinflamar el sistema nervioso.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "mascotas_estres",
      title: "Mascotas con Ansiedad, Miedo a Ruidos o Convalecencia Veterinaria",
      time: "10 min",
      description: "Para perros y gatos asustados por tormentas, petardos, cambios de casa o tras cirugías.",
      steps: [
        "Coloca una foto del animal o su cartilla veterinaria en la plantilla.",
        "Abre proceso con <strong>Campo Electromagnético</strong> en sentido horario.",
        "Gira con <strong>Limpiar Cuerpo y Lugar</strong> en sentido ANTIHORARIO sobre la zona del lomo durante 90 segundos.",
        "Irradia con cara ranurada <strong>Paz (Shalom)</strong> y <strong>Sanación Completa</strong> en sentido HORARIO durante 2 minutos.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "ninos_pesadillas",
      title: "Niños con Miedos Nocturnos, Pesadillas o Timidez Escolar",
      time: "8 min",
      description: "Protocolo ultracorto y suave para niños que se despiertan con angustia o sufren en el colegio.",
      steps: [
        "Trabaja preferiblemente sobre su foto a distancia.",
        "Abre el campo con <strong>Campo Electromagnético</strong> (1 pasada suave).",
        "Aplica <strong>Paz (Shalom)</strong> con cara ranurada girando a la derecha en su corazón y frente durante 2 minutos.",
        "Coloca el sello de protección <strong>Estrella de David (Maguén David)</strong> para que se sienta protegido por sus ángeles de la guarda.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "votos_karmicos",
      title: "Ruptura de Votos Kármicos de Pobreza, Castidad y Sacrificio",
      time: "18 min",
      description: "Para personas que sienten que hagan lo que hagan siempre terminan perdiendo el dinero o la pareja.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong>.",
        "Testea en el 7º chakra con <strong>Lazos Kármicos (Gilgul Neshamot)</strong> con cara lisa.",
        "Aplica <strong>Cortar Lazos Tóxicos (Lenatek)</strong> y <strong>Borrar Memoria Celular</strong> en sentido ANTIHORARIO decretando la revocación de cualquier voto ancestral.",
        "Irradia con cara ranurada <strong>Abundancia (Shefa)</strong> y <strong>Luz Divina</strong> en sentido HORARIO durante 3 minutos.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    },
    {
      id: "garganta_tiroides",
      title: "Desbloqueo de Garganta, Afonías, Tiroides y Miedo a Hablar en Público",
      time: "12 min",
      description: "Para sanar el 5º chakra tras periodos de tragar palabras, callar verdades o problemas de tiroides.",
      steps: [
        "Abre el campo con <strong>Campo Electromagnético</strong>.",
        "Aplica <strong>Disolver (Lefazer)</strong> en la laringe en sentido ANTIHORARIO durante 2 minutos para disolver el nudo en la garganta.",
        "Aplica <strong>Liberación Emocional</strong> para soltar lo no dicho.",
        "Irradia con cara ranurada <strong>Chakra Garganta (Garón)</strong> y <strong>Sanación Completa</strong> en sentido HORARIO.",
        "Irradia <strong>Confianza y Seguridad</strong> en el estómago.",
        "Sella con <strong>Dorado Áurico</strong> y cierra el proceso."
      ]
    }
  ]
};
