export class Stack {

   constructor() {
      this.reset();
   }

   reset() {
      this.totals = {};
      this.values = {};
      this.normalized = false;
      this.invalid = {};
   }

   acknowledge(ordinal, value) {
      if (value != null) {
         var v = this.totals[ordinal] || 0;
         this.totals[ordinal] = v + value;
      } else {
         this.invalid[ordinal] = true;
      }
   }

   measure(normalized) {
      if (normalized) {
         this.normalized = true;
         return [0, 1];
      }

      var max = 0, min = 0;
      for (var key in this.totals) {
         if (this.totals[key] > max)
            max = this.totals[key];
         if (this.totals[key] < min)
            min = this.totals[key];
      }
      return [min, max];
   }

   stack(ordinal, value) {

      if (value == null || this.invalid[ordinal])
         return null;

      var base = this.values[ordinal] || 0;

      var result = this.values[ordinal] = base + value;

      if (!this.normalized)
         return result;

      var total = this.totals[ordinal];

      if (total > 0)
         return result / total;

      return null;
   }
}
