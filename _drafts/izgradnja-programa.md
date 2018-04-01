# Izgradnja programa

Izgradnja (*build*) programa je proces pretvaranja izvornog koda u aplikaciju. To se u razvojnim okruženjima obično svodi na to da pritisnete funkcijski taster.

Postupak se obično sastoji od dve faze:
- prevođenja (engl. *compile*) i
- povezivanja (engl. *link*), kojim se uključuju standardne funkcije.

Ako te dve faze uspeju, program može da se izvršava. Ako izgradnja uspe, možete sebe da potapšete po leđima: ni kompajler ni linker nisu naišli na greške. Da li to znači da ste gotovi? Ne. Kompajler hvata sintaksne greške, kao i greške programske strukture. Ali ima mnogo grešaka, pre svega programske logike, koje on ne može da pronađe.
