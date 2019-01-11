# DISEÑO DEL PRODUCTO
## FASE DE PLANIFICACIÓN

La primera labor que se realizó fue determinar qué tareas realizaríamos en nuestra primera semana/sprint de trabajo, se optó por **dedicar el primer sprint integramente a tareas de UX** que nos permitieran enfocar en el usuario nuestra página y que nos servirian de guía a todo el proceso creativo de la aplicación, las tareas que determinamos en este primer sprint fueron las siguientes:
- Elaborar una encuesta a través de un formulario de Google que nos ayude a determinar el usuario al que estaría enfocada nuestra aplicación.
- Análisis de la data recibida a través de la encuesta.
- Elaborar Histórias de Usuario.
- Realizar prototipado de baja fidelidad.
- Realizar testeo del prototipado.
- Iterar en base a los resultados.

#### ELABORACIÓN DE LA ENCUESTA
Para elaborar un primer diseño del producto era necesario responder preguntas básicas como:
- ¿Quién es nuestro usuario?
- ¿Qué uso le dará a la aplicación?
- ¿Qué información considera más relevante?

Para dar respuesta a estas preguntas decidimos realizar una encuesta a través de un formulario de Google y buscar que la mayor cantidad de jugadores de League of legends (grupo más amplio e inicial de usuarios) la respondiera, para así poder acotar de forma más clara el público al que esta dirigida nuestra aplicación y tener esto en mente al crear nuestras Historias de Usuario. La encuesta fue posteada en un grupo de Facebook de jugadores de League of Legends y en el foro oficial del juego. Debido a las limitaciones de tiempo se decidió cerrar la encuesta luego de 1 día para poder continuar a la fase de analisis de los datos obtenidos.

EL formulario de Google contenía las siguientes preguntas:

1. Te identificas como: Hombre / Mujer / Otro. **(solo una opción)**
2. Tu edad: **(campo a llenar)**
3. ¿Cuánto tiempo llevar jugando LoL?: No juego LoL, pero tengo pensado jugar en el futuro. / Menos de 1 año. / Entre 1 año y 4 años. / Más de 4 años. **(solo una opción)**

Estas primeras preguntas tenian como objetivo definir las características comúnes de los usuarios de la aplicación.

4. ¿Usarías una aplicación que te muestre información y estadísticas de los champions de LoL?: Si / No / Quizas **(solo una opción)**
5. En caso que se respondiera "No" a la pregunta anterior: ¿por qué no?: **(campo a llenar)**
6. ¿Con qué finalidad usarías la aplicación?: Para decidir con que champion jugar / Para ver que champion se acomoda más a mi estilo de juego. / Para comparar estadísticas entre champions. **(posibilidad de elegir multiples opciones)**
7. ¿Qué información te gustaría ver sobre los champions?: Stats base. (HP, MP, MovementSpeed, Armor, etc...) / Información sobre niveles de dificultad, ataque, defensa, magia (te da una idea general de a qué esta orientado el champion) / Stat growth (como aumentan los stats del champion al subir de nivel) / Builds, Champions que son counter, Champions más jugados. **(posibilidad de elegir multiples opciones)**
8. De la información anterior, ¿cuál te parece MÁS importante? **(mismas opciones que pregunta anterior, solo una respuesta)**
9. Y ¿cuál te parece MENOS importante?:  **(mismas opciones que pregunta anterior, solo una respuesta)**
10. ¿Cuándo usarías esta aplicación?: Antes de una partida / Durante una partida / Despues de una partida / En otro momento. **(posibilidad de elegir multiples opciones)**

Este segundo set de preguntas buscaba acotar el uso que los usuarios darían a la aplicación, y nos ayudaría a decidir sobre opciones de filtrado de información y alguna operación adicional que se pudiera hacer con la misma para mostrar estadísticas útiles a los usarios.

11. En caso que hubieren seleccionado que se identificaban como Mujer u Otro: ¿Has sido victima de algún comportamiento antideportivo? (comportamiento disruptivo que puede afectar la competitividad, diversión o integridad del juego de manera significativa): Si / No **(solo una respuesta)**
12. En caso de afirmativa a la respuesta anterior: ¿Qué solución crees que sería la adecuada para detener la discriminación dentro del juego?: **(campo a llenar)**

Estas 2 últimas preguntas buscaban evaluar la posibilidad de dar a la aplicación un enfoque que permitiera solucionar, aunque fuera en parte, la discriminación que se puede sufrir dentro del juego.

#### ANÁLISIS DE LA INFORMACIÓN RECOLECTADA A TRAVÉS DE LA ENCUESTA

Luego de cerrada la encuesta nos dispusimos a analizar los datos recolectados. Para nuestra sorpresa nos dimos cuenta que la mayoría de quienes habían respondido eran hombres, *de un universo de 59 personas solo 5 eran mujeres*. 

![Pie chart porcentaje mujeres](ImgStats/ChartTeidentificas.png)

Esto generó un cambio de paradigma en como enfrentabamos el proyecto, debido a que no queríamos crear un proyecto que fuera para una simple mayoría sino **una aplicación que permitiera a las mujeres integrarse en un ambito dominado por hombres de manera más sencilla**. 

En cuanto a las preguntas sobre la información que a los jugadores les parecía más importante, esta seguía siendo relevante ya que la mayoría de las personas que respondieron la encuesta llevaban jugando al menos 4 años, lo cual nos permite concluír que tienen un grado de conocimiento del juego que les permite determinar que información es más relevante que otra desde la perspectiva de los jugadores.

![Pie chart razones para usar la app](ImgStats/ChartRazonesDeUso.png)

La opción más votada fué "Para comparar estadísticas entre champions". Esto nos da una guía en cuanto a la información agregada que puede mostrar nuestra aplicación, una comparación entre champions que el usuario elija.

![Chart info que les gustaría ver](ImgStats/ChartInfo.png)

En cuanto a la información que a los usuarios les gustaría ver en nuestra aplicación gano la opción "Builds, Champions que son counter, Champions más jugados", sin embargo *no es posible mostrar esta información por el momento debido a que no se encuentra en nuestra base de datos*. Sin perjuicio de lo anterior, esta opción se incluyó en la encuesta ya de todas formas puede orientar mejoras futuras que satisfagan las necesidades de los usarios.

![Chart info más importante](ImgStats/ChartInfoImportante.png)

Al igual que en la pregunta anterior, la información más relevante para los usuarios no es posible proveerselas actualmente. La segunda opción más votada si se encuentra en nuestra base de datos y pensamos por esto darle prioridad al momento de desplegar la información.

![Chart info menos importante](ImgStats/ChartInfoMenosImportante.png)

En cuanto a la información menos importante no encontramos un consenso entre quienes respondieron la encuesta.

![Chart cuando usarían la aplicación](ImgStats/ChartCuandoUsarianApp.png)

La mayoría de los usuarios usaría la aplicación antes de una partida, lo cual nos permite mostrar más información, ya que quienes accedan a la app tendrán más tiempo disponible para ver sus datos (al contrario de lo que ocurriría si la mayoría pensara en usar la app durante una partida, necesitarían solo info contingente y muy puntual).

![Chart soluciones a la discriminación](ImgStats/ChartSolucionDiscriminacion.png)

Respecto de las soluciones que los encuestados proponen contra la discriminación, la mayoría coincide que un posible solución sería endurecer las sanciones, si bien esto es algo que escapa de las posibilidades de nuestra aplicación si sería posible agregar una sección que informe a los usuarios del sistema de castigos que tiene Riot(empresa creadora de League of Legends) y quizas aconsejarles sobre algunas practicas que podrían hacer su experiencia mas agradable (como la posibilidad de "mutear" a los demas jugadores si estos estan tomando conductas discriminatorias y anticompetitivas, esto va en la linea de una de las propuestas "Quitar la capacidad de comunicarse", solo que es posible aplicarlo de lado del jugador, sin necesidad de intervención de Riot).

#### FLUJO

En base a la información recolectada diseñamos un primer flujo:

![Primer Flujo](ImgStats/PrimerFlujo.jpg)

Luego de dos procesos de iteración decidimos cambiar algunas ideas iniciales que teniamos:

- Decidimos cambiar los botones "A", "B" y "C" por un Menú de Navegación que se ubicará bajo el logo de la App y se mantendrá visible solo en la parte superior del sitio. Este menú de navegación permitirá acceder rapidamente a las secciones de la app: 
    - Inicio: se podrán visualizar a todos los champions.
    - Orden: permitirá ordenar los champions alfabéticamente por el orden en que fueron introducidos al juego. Todo esto en la misma página.
    - Filtros: permitirá filtrar los champions por su tipo (fighter, tank, mage, assassin, support), por la letra de su nombre, por stat secundario (MP, energy, rage). Todo esto en la misma página.
    - Comparación entre Champions: permitirá desplegar una comparación entre 2 champions que mostrará un gráfico con la variación de stats por nivel, en base a esto será posible determinar cuál de los 2 champions es mas fuerte en early game, mid game y late game.
    - Sección de sanciones y denuncias: llevará al usuario a una sección que lo informe sobre las conductas que estan penadas en LoL y la forma para reportarlas, asi como también las acciones que se pueden tomar para lidiar con una persona que recurra a insultos y discriminación dentro del juego.

- En la misma página donde se mostrarán los champions decidimos agregar un botón de búsqueda que permita al usuario buscar un champion en particular, por nombre. 

- (En evaluación) Decidimos evaluar la posibilidad, principalmente en relación al tiempo disponible, de agregar una sección de "Glosario" que introduzca a la usuaria a la terminología de LoL.

- (En evaluación) Tambien en consideración al tiempo, estamos evaluando la posibilidad de agregar un formulario de contacto donde las usuarias puedan enviarnos sus experiencias y sugerencias para que podamos ir mejorando la página.


#### CALCULO AGREGADO: COMPARACIÓN DE CHAMPIONS

Como requisito de completitud del proyecto se incluyó la realización de un cálculo agregado que entregue infomación relevante al usuario.

Al momento de definir las características de este cálculo nos basamos en la encuesta realizada en formulario de Google que se acompaña en el README de este proyecto. 

Para los usuarios, uno de los contenidos más relevantes es la posibilidad de comparar a los champions en sus diferentes dimensiones, en miras a ayudar al usuario en esta tarea decidimos que nuestro cálculo agregado iria en la linea de mostrar al usuario una *comparación de los stats de los champions*.

Para dar al usuario la mayor cantidad de información útil posible decidimos que se le mostraría en un grafico las estadísticas del champion que estuviera revisando y en el mismo grafico, a modo de comparación, se mostraran las estadísticas promediadadas de todos los champions, o de los champions que el usuario elija.

##### CHAMPION PROMEDIO

Para efectos de nuestro grafico comparativo nuestra función `averageStats` toma los filtros que el usuario elija y con los champions que cumplan las condiciones saca un promedio de todos sus stats. Para el grafico inicial se muestra un promedio de todos los champions pero el usuario dispone de un select para poder filtrar los champions con los que se hará este promedio.

#### PROTOTIPO DE BAJA FIDELIDAD

Según las respuestas del formulario, los usuarios que ocuparían la aplicación lo harían antes de una partida, esto nos permitió desarrollar una trama más amplia ya que el usuario dispondrá de más tiempo para interactuar con la página, por lo tanto, pensamos en un diseño amigable y funcional. Creamos varias secciones; “Sobre LOLApp”, por ejemplo, la cual compartirá el encabezado con la interfaz principal (Todas las secciones lo harán), y habrá un texto explicando de que se trata el sitio y una imagen. 
En la parte donde se visualizará la data estarán los Champions dentro de "tarjetas" donde se verán las caracteristicas generales de cada uno; dentro del menú principal establecimos la sección “Comparar Champions” (que cuenta con bloques de imágenes de los champions con sus estadísticas y comparaciones con otros champions). Y la sección "¿Te han flameado?" para explicar de que se trata el concepto "Flamear", que hacer en situaciones de discriminación y la opción de dejar un testimonio si la usuaria siente la necesidad de hacerlo.

#### Link Prototipos:

 [Web](https://www.figma.com/file/UE7ncZ1gqI6vLWtXH6Xy6r0E/Prototipo-Baja-Fidelidad-LOLApp?node-id=0%3A1)

 [Mobile (Iphone X)](https://www.figma.com/file/OOvnDLkhQz7FgnJFOuYCE6Da/LOLApp-Iphone-X?node-id=0%3A1)

 [Mobile (Iphone X V2.0)](https://www.figma.com/file/EZlUoneiTHmkerXNQMST2C/LOLApp-Iphone-X(V2.0))


#### TEST DE USABILIDAD

Testeamos nuestro prototipo con dos usuaries que juegan LoL frecuentemente, no se les notó aproblemades para navegar por el prototipo, sabian donde ir para buscar algo especifico, entendian para que servian los elementos que se encontraban en las interfaces, y nos dieron una opinion bastante positiva y constructiva, y concluimos que debiamos modificar algunas caracteristicas.

Decidimos eliminar la sección "Comparar Champions", y acomodamos el cálculo agregado para que pudiera verse cuando se clickeara sobre la tarjeta del Champion, consideraron que no era necesario hacer una sección exclusiva para eso ya que se apreciaria mejor la información si se pudiera ver directo "dentro" del campeón. 
La falta de un botón de volver al inicio fue categórico, no consideraban "comodo" tener que volver a scrollear hasta arriba para ir a la pagina principal nuevamente. Por lo tanto agregamos botones de vuelta al inicio en el "bottom" de las secciones donde hay mucho texto.
Determinamos que la opción para dejar un testimonio no era viable ya que no resolveriamos el problema del usuario, pero pensamos que informar sobre el proceso de denuncia ayuda a que al menos las usuarias sepan como proceder en una situacion de discriminacion.

 

#### TDD

Para que nos sirviera de guía a nuestro proyecto enunciamos una serie de tests que describen la forma en que el usuario podrá manipular la data en nuestra aplicación, estos estan enfocados en comprobar 3 tipos de funciones:

- Función de filtrado `championManage.filterData(data, condition)`, los test estan orientados a comprobar que los filtros se apliquen correctamentena las distintas condiciones y que las condiciones de filtrado se puedan utilizar copulativamente.

- Función de orden de datos `championManage.sortData(data, sortBy, sortOrder`, orientados a comprobar que se reorganizen segun las preferencias del usuario el arreglo con los champions.

- Función de calculo agregado `championManage.averageStats(data)`, orientados a corroborar que los calculos de promedio que muestra esta función sean correctos.

- Función de busqueda `championManage.searchChamp(data, searching)`, buscan comprobar que al ingresar una determinada palabra como campo de busqueda la función devuelva un arreglo con todos los champions que contengan dicha palabra en su nombre, independiente de mayusculas o minusculas.