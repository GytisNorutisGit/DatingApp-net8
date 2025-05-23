using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] // api/users
public class BaseApiController : ControllerBase
{
    // This class is used to add common functionality to all API controllers.
    // For example, you can add custom error handling, logging, etc. here.
}