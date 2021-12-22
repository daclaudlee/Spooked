﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spooked.Models
{
    public class WatchListMovie
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid MovieId { get; set; }

        public Movie Movie { get; set; }
    }
}
