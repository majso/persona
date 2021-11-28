using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")] 
    [ApiController]
    public class FeedsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public FeedsController(ApiDbContext context)
        {   
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetFeeds()
        {
            var Feeds = await _context.Feeds.ToListAsync();
            return Ok(Feeds);
        }

        [HttpPost]
        public async Task<IActionResult> CreateFeed(FeedData feed)
        {
            if(ModelState.IsValid)
            {
                await _context.Feeds.AddAsync(feed);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetFeed", new {feed.Id}, feed);
            }

            return new JsonResult("Something went wrong") {StatusCode = 500};
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFeed(int id)
        {
            var feed = await _context.Feeds.FirstOrDefaultAsync(x => x.Id == id);

            if(feed == null)
                return NotFound();

            return Ok(feed);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFeed(int id, FeedData feed)
        {
            if(id != feed.Id)
                return BadRequest();

            var existFeed = await _context.Feeds.FirstOrDefaultAsync(x => x.Id == id);

            if(existFeed == null)
                return NotFound();

            existFeed.Name = feed.Name;
            existFeed.Url = feed.Url;
            
            // Implement the changes on the database level
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeed(int id)
        {
            var existFeed = await _context.Feeds.FirstOrDefaultAsync(x => x.Id == id);

            if(existFeed == null)
                return NotFound();

            _context.Feeds.Remove(existFeed);
            await _context.SaveChangesAsync();

            return Ok(existFeed);
        }
    }
}