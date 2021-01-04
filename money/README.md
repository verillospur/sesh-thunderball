# sesh-thunderball-money

Money controller
^^^^^^^^^^^^^^^^

INPUTS
 --> Money
   --> list id                int
   --> user id                int
   --> amount                 number
   --> numbers                array
   --> amount per number      number        default:10
   --> delivery info          string        also in thunderball-winnings
   --> winnings choice        string        also in thunderball-winnings
   --> chat log               string
   --> paid direct to Sesh?   bool
   --> paid immediately?      bool
   --> date/time paid         date
   --> account paid to        string


OUTPUTS
 --> id for this entry        int
