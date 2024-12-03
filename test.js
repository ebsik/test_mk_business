/*
    task
    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку
*/

/**
 * Класс для работы с API
 *
 * @author		Plotnikova Anastasia
 * @version		v.1.0 (03/12/2024)
 */
class Api
{
    constructor()
    {

    }


    /**
     * Заполняет строковый шаблон template данными из объекта object
     *
     * @author		Plotnikova Anastasia
     * @version		v.1.0 (03/12/2024)
     * @param		{object} object
     * @param		{string} template
     * @return		{string}
     */
    get_api_path(object, template)
    {
        const regexp = /(?<id>\%id\%)|(?<name>\%name\%)|(?<role>\%role\%)|(?<salary>\%salary\%)/g;

        return template.replaceAll(regexp, (str, id, name, role, salary) => {
            return object[str.replaceAll('%', '')]
        });
    }
}

const user =
    {
        id		: 20,
        name	: 'John Dow',
        role	: 'QA',
        salary	: 100
    };

const api_path_templates =
    [
        "/api/items/%id%/%name%",
        "/api/items/%id%/%role%",
        "/api/items/%id%/%salary%"
    ];

const api = new Api();

const api_paths = api_path_templates.map((api_path_template) =>
{
    return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];
