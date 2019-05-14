const surveyJSON =
{
  "pages": [
    {
      "name": "yard",
      "elements": [
        {
          "type": "radiogroup",
          "name": "lawn_size",
          "title": "Will you choose to reduce the size of your lawn?",
          "choices": [
            "Small Change ~100 sq ft reduction",
            "Medium Change ~ 500 sq ft reduction",
            "Large Change ~ 1,000 sq ft reduction"
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "mower_type",
          "title": "Do you use a gas mower?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "mower_switch",
          "visibleIf": "{mower_type} = \"yes\"",
          "title": "Will you choose to switch away from a gas mower?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "mowing_frequency",
          "visibleIf": "{mower_type} = \"yes\"",
          "title": "Will you choose to mow your lawn less in the summer?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "fertilizer",
          "title": "Do you use fertilizer on your yard?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "fertilizer_applications",
          "visibleIf": "{fertilizer} = \"yes\"",
          "title": "Will you choose to reduce you fertilizer applications this year?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "leaf_cleanup",
          "title": "Do you use a gas blower to clean leaves?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "leaf_cleanup_gas_blower_use",
          "visibleIf": "{leaf_cleanup} = \"yes\"",
          "title": "Will you choose to replace your gas blower?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        }
      ],
      "title": "Yard / Landscaping"
    },
    {
      "name": "weatherization",
      "elements": [
        {
          "type": "radiogroup",
          "name": "weatherized",
          "title": "Is your home well insulated/weatherized?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "energy_audit",
          "visibleIf": "{weatherized} = \"no\"",
          "title": "Will you choose to sign up for a free energy audit?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "insulate_home",
          "visibleIf": "{weatherized} = \"no\"",
          "title": "Will you choose to better insulate your home?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "install_programmable_thermostats",
          "title": "Will you choose to install programmable thermostats?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        }
      ],
      "title": "Weatherization and Thermostats"
    },
    {
      "name": "heating",
      "elements": [
        {
          "type": "radiogroup",
          "name": "heating_system_type",
          "title": "What type of heating system do you have?",
          "hasOther": true,
          "choices": [
            "oil furnace",
            "forced hot air",
            "baseboard water",
            "wood fireplace",
            "solar"
          ]
        },
        {
          "type": "radiogroup",
          "name": "insulate_home",
          "title": "Will you choose to better insulate your home?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "upgrade_heating_system",
          "title": "Will you choose to upgrade to a more efficient boiler/furnace?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "install_heat_pump",
          "title": "Will you choose to switch from oil to heat pump?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "heating_system_assessment",
          "title": "Will you choose to sign up for a free heating system assessment?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        }
      ],
      "title": "Heating and Cooling systems"
    },
    {
      "name": "water",
      "elements": [
        {
          "type": "radiogroup",
          "name": "water_heater_type",
          "title": "What type of water heater do you have in your home?",
          "choices": [
            {
              "value": "storage_tank",
              "text": "Conventional Storage Tank "
            },
            {
              "value": "tankless",
              "text": "Tankless (On-Demand)"
            },
            {
              "value": "heat_pump",
              "text": "Heat Pump (Hybrid) "
            },
            {
              "value": "solar",
              "text": "Solar Powered"
            },
            {
              "value": "condensing",
              "text": "Condensing"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "hot_water_assessment",
          "title": "Will you choose to sign up for a free hot water assessment?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "replace_water_heater",
          "title": "Will you choose to replace your current water heater w/ heat pump?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        }
      ],
      "title": "Water Heating"
    },
    {
      "name": "solar",
      "elements": [
        {
          "type": "radiogroup",
          "name": "solar_panels",
          "title": "Do you have a solar panel array?",
          "choices": [
            "yes",
            "no"
          ]
        },
        {
          "type": "radiogroup",
          "name": "solar_assessment",
          "visibleIf": "{solar_panels} = \"no\"",
          "title": "Will you choose to sign up for a free solar assessment?",
          "choices": [
            "yes",
            "no"
          ]
        },
        {
          "type": "radiogroup",
          "name": "install_solar_panels",
          "visibleIf": "{solar_panels} = \"no\"",
          "title": "Will you choose to install a solar panel array?",
          "choices": [
            "yes",
            "no"
          ]
        }
      ],
      "title": "Solar Power"
    },
    {
      "name": "lighting",
      "elements": [
        {
          "type": "radiogroup",
          "name": "bulbs_incandescent",
          "title": "Do you have more than 10 incandescent/halogen bulbs in your home?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "bulbs_fluorescent_cfl",
          "title": "Do you have more than 10 fluorescent/CFL bulbs in your home?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "bulbs_swap",
          "title": "Will you choose to sign up for a free light bulb swap?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "bulbs_replace_leds",
          "title": "Will you choose to replace your bulbs with LED bulbs",
          "choices": [
            "none",
            "some",
            "half",
            "all"
          ],
          "colCount": 4
        }
      ],
      "title": "Lighting"
    },
    {
      "name": "appliances",
      "elements": [
        {
          "type": "radiogroup",
          "name": "appliances_replace_refrigerator",
          "title": "Will you choose to upgrade to an Energy Star model refrigerator? ",
          "choices": [
            "I already use a Energy Star Product",
            "yes",
            "no"
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "appliances_replace_washer",
          "title": "Will you choose to upgrade to an Energy Star model washer? ",
          "choices": [
            "I already use a Energy Star Product",
            "yes",
            "no"
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "cold_water_wash_loads",
          "title": "Will you choose to use replace hot water washes with cold washes?",
          "choices": [
            "no",
            "once per week",
            "twice per week",
            "three times per week"
          ],
          "colCount": 4
        },
        {
          "type": "radiogroup",
          "name": "line_or_rack_dry_loads",
          "title": "Will you choose to use dry clothes by line or rack dry instead of a dryer?",
          "choices": [
            "no",
            "once per week",
            "twice per week",
            "three times per week"
          ],
          "colCount": 4
        },
        {
          "type": "radiogroup",
          "name": "extra_refrigerator",
          "title": "Do you have an extra refrigerator?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "extra_refrigerator_age",
          "visibleIf": "{extra_refrigerator} = \"yes\"",
          "title": "What is the age of your extra refrigerator?",
          "choices": [
            ">20 years old",
            "15-20 years old",
            "10-15 years old",
            "0-10 years old"
          ],
          "colCount": 4
        },
        {
          "type": "radiogroup",
          "name": "extra_refrigerator_pickup",
          "visibleIf": "{extra_refrigerator} = \"yes\"",
          "title": "Will you choose to sign up for a free extra refrigerator pick-up?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "unplug_refrigerator",
          "visibleIf": "{extra_refrigerator} = \"yes\"",
          "title": "Will you choose to unplug your extra fridge temporarily?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "smart_power_strips",
          "title": "Will you choose to install smart power strips to kill phantom loads?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "install_electricity_monitor",
          "title": "Will you choose to install an electricity monitor to find energy hogs?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        }
      ],
      "title": "Home Appliances"
    },
    {
      "name": "transportation",
      "elements": [
        {
          "type": "radiogroup",
          "name": "transportation_car_type",
          "title": "What type of car do you drive?",
          "choices": [
            "electric/hybrid",
            "gas/diesel",
            "none"
          ],
          "colCount": 3
        },
        {
          "type": "rating",
          "name": "reduce_total_mileage",
          "visibleIf": "{transportation_car_type} = \"electric/hybrid\" or {transportation_car_type} = \"gas/diesel\"",
          "title": "By how many miles are you willing to reduce the miles you travel by car/auto each year?",
          "rateMin": 0,
          "rateMax": 20000,
          "rateStep": 5000,
          "minRateDescription": "No reduction in mileage",
          "maxRateDescription": "reduction in mileage"
        },
        {
          "type": "radiogroup",
          "name": "carpooling_increase",
          "visibleIf": "{transportation_car_type} <> \"none\"",
          "title": "Can you choose to carpool more often?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "rating",
          "name": "carpooling_amount",
          "visibleIf": "{carpooling_increase} = \"yes\" && {transportation_car_type} <> \"none\"",
          "title": "How many times can you choose to carpool per week?",
          "rateMax": 6
        },
        {
          "type": "radiogroup",
          "name": "transportation_public",
          "title": "Can you choose public/train/bus transportation more often?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "rating",
          "name": "transportation_public_amount",
          "visibleIf": "{transportation_public} = \"yes\"",
          "title": "How many times can you choose public transportation per week?",
          "rateMax": 6
        },
        {
          "type": "radiogroup",
          "name": "transportation_telecommute",
          "title": "Can you choose to telecommute more often?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "rating",
          "name": "transportation_telecommute_amount",
          "visibleIf": "{transportation_telecommute} = \"yes\"",
          "title": "How many times can you choose public transportation per week?",
          "rateMax": 6
        },
        {
          "type": "radiogroup",
          "name": "transportation_commute_bike_walk",
          "title": "Can you choose to bike or walk your commute more often?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "rating",
          "name": "transportation_commute_bike_walk_amount",
          "visibleIf": "{transportation_commute_bike_walk} = \"yes\"",
          "title": "How many times can you choose to bike or walk your commute",
          "rateMax": 6
        },
        {
          "type": "radiogroup",
          "name": "transportation_flights",
          "title": "Can you choose to take fewer flights per year?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        }
      ],
      "title": "Transportation"
    },
    {
      "name": "eating",
      "elements": [
        {
          "type": "radiogroup",
          "name": "eating_switch_meals",
          "title": "Will you choose to change the food consumed in your family meals change to lower emissions?",
          "choices": [
            "yes",
            "no"
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "eating_switch_meals_amount",
          "visibleIf": "{eating_switch_meals} = \"yes\"",
          "title": "How many meals per week are you willing to switch from Beef/Lamb/Pork/Poultry/Cheese/Fish/Seafood to Vegetarian (w/ cheese, eggs) Vegetarian/Vegan (non-dairy)?",
          "choices": [
            "1 - 2 meals",
            "3 - 4 meals",
            "5 - 6 meals",
            "7 - 8 meals"
          ],
          "colCount": 4
        },
        {
          "type": "rating",
          "name": "family_size",
          "visibleIf": "{eating_switch_meals} = \"yes\"",
          "title": "To estimate servings, how many members of your family are there?",
          "rateMax": 6
        }
      ],
      "title": "Eating"
    },
    {
      "name": "recycle",
      "elements": [
        {
          "type": "radiogroup",
          "name": "reuse_containers",
          "title": "When possible, will you use refillable containers (bags, mugs, bottles)?",
          "choices": [
            "usually",
            "sometimes",
            "rarely",
            "never"
          ],
          "colCount": 4
        },
        {
          "type": "radiogroup",
          "name": "buy_bulk",
          "title": "When possible, will you buy in bulk to minimize packaging?",
          "choices": [
            "usually",
            "sometimes",
            "rarely",
            "never"
          ],
          "colCount": 4
        },
        {
          "type": "radiogroup",
          "name": "buy_recycled",
          "title": "When possible, will you buy items made from recycled materials?",
          "choices": [
            "usually",
            "sometimes",
            "rarely",
            "never"
          ],
          "colCount": 4
        },
        {
          "type": "radiogroup",
          "name": "buy_sell_used",
          "title": "When possible, will you buy or sell used goods rather than new?",
          "choices": [
            "usually",
            "sometimes",
            "rarely",
            "never"
          ],
          "colCount": 4
        }
      ],
      "title": "Reuse / Recycle"
    }
  ],
  "questionStartIndex": "1"
}