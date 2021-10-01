using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")] // We define the routing that our controller going to use
[ApiController] // We need to specify the type of the controller to let .Net core know
public class TodoController : ControllerBase
{
    [HttpGet]
    public ActionResult TestRun()
    {
        return Ok("success");
    }
}